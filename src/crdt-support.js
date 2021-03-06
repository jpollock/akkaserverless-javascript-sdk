/*
 * Copyright 2019 Lightbend Inc.
 */

const path = require("path");
const debug = require("debug")("akkaserverless-crdt");
const util = require("util");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const protoHelper = require("./protobuf-helper");
const AnySupport = require("./protobuf-any");
const crdts = require("./crdts");
const CommandHelper = require("./command-helper");
const Metadata = require("./metadata");

class CrdtServices {
  constructor() {
    this.services = {};
    this.includeDirs = [
      path.join(__dirname, "..", "proto"),
      path.join(__dirname, "..", "protoc", "include")
    ];
  }

  addService(entity, allEntities) {
    this.services[entity.serviceName] = new CrdtSupport(entity.root, entity.service, {
      commandHandlers: entity.commandHandlers,
      onStateSet: entity.onStateSet,
      defaultValue: entity.defaultValue
    }, allEntities);
  }

  componentType() {
    return "akkaserverless.component.crdt.Crdt";
  }

  register(server) {
    const packageDefinition = protoLoader.loadSync(path.join("akkaserverless", "component", "crdt", "crdt.proto"), {
      includeDirs: this.includeDirs
    });
    const grpcDescriptor = grpc.loadPackageDefinition(packageDefinition);

    const entityService = grpcDescriptor.akkaserverless.component.crdt.Crdt.service;

    server.addService(entityService, {
      handle: this.handle.bind(this)
    });
  }

  handle(call) {
    let service;

    call.on("data", crdtStreamIn => {
      // cycle through the CrdtStreamIn type, this will ensure default values are initialised
      crdtStreamIn = protoHelper.moduleRoot.akkaserverless.component.crdt.CrdtStreamIn.fromObject(crdtStreamIn);

      if (crdtStreamIn.init) {
        if (service != null) {
          service.streamDebug("Terminating entity due to duplicate init message.");
          console.error("Terminating entity due to duplicate init message.");
          call.write({
            failure: {
              description: "Init message received twice."
            }
          });
          call.end();
        } else if (crdtStreamIn.init.serviceName in this.services) {
          service = this.services[crdtStreamIn.init.serviceName].create(call, crdtStreamIn.init);
        } else {
          console.error("Received command for unknown CRDT service: '%s'", crdtStreamIn.init.serviceName);
          call.write({
            failure: {
              description: "CRDT service '" + crdtStreamIn.init.serviceName + "' unknown."
            }
          });
          call.end();
        }
      } else if (service != null) {
        service.onData(crdtStreamIn);
      } else {
        console.error("Unknown message received before init %o", crdtStreamIn);
        call.write({
          failure: {
            description: "Unknown message received before init"
          }
        });
        call.end();
      }
    });

    call.on("end", () => {
      if (service != null) {
        service.onEnd();
      } else {
        call.end();
      }
    });
  }
}

class CrdtSupport {

  constructor(root, service, handlers, allEntities) {
    this.root = root;
    this.service = service;
    this.anySupport = new AnySupport(this.root);
    this.commandHandlers = handlers.commandHandlers;
    this.onStateSet = handlers.onStateSet;
    this.defaultValue = handlers.defaultValue;
    this.allEntities = allEntities;
  }

  create(call, init) {
    const handler = new CrdtHandler(this, call, init.entityId);
    if (init.delta) {
      handler.handleInitialDelta(init.delta)
    }
    return handler;
  }
}

/**
 * Callback for handling {@link module:akkaserverless.crdt.CrdtCommandContext#onStateChange} events for a CRDT, specific to a
 * given streamed connection.
 *
 * The callback may not modify the CRDT, doing so will cause an error.
 *
 * @callback module:akkaserverless.crdt.CrdtCommandContext~onStateChangeCallback
 * @param {module:akkaserverless.crdt.CrdtState} state The current state that has changed
 * @param {module:akkaserverless.crdt.StateChangedContext} context The context for the state change.
 * @returns {undefined|object} If an object is returned, that will be sent as a message to the current streamed call.
 * It must be an object that conforms to this streamed commands output type.
 */

/**
 * Callback for handling {@link module:akkaserverless.crdt.CrdtCommandContext#onStreamCancel} events for a CRDT, specific to a
 * given streamed connection.
 *
 * The callback may modify the CRDT if it pleases.
 *
 * @callback module:akkaserverless.crdt.CrdtCommandContext~onStreamCancelCallback
 * @param {module:akkaserverless.crdt.CrdtState} state The current state that has changed
 * @param {module:akkaserverless.crdt.StreamCancelledContext} context The context for the stream cancellation.
 */

/*
 * Handler for a single CRDT entity.
 */
class CrdtHandler {

  constructor(support, call, entityId) {
    this.entity = support;
    this.call = call;
    this.entityId = entityId;

    this.currentState = null;

    this.streamId = Math.random().toString(16).substr(2, 7);

    this.commandHelper = new CommandHelper(this.entityId, support.service, this.streamId, call,
      this.commandHandlerFactory.bind(this), support.allEntities, debug);

    this.streamDebug("Started new stream");

    this.subscribers = new Map();
    this.cancelledCallbacks = new Map();
  }

  commandHandlerFactory(commandName, grpcMethod) {
    if (this.entity.commandHandlers.hasOwnProperty(commandName)) {

      return (command, ctx) => {

        /**
         * Context for a CRDT command handler.
         *
         * @interface module:akkaserverless.crdt.CrdtCommandContext
         * @extends module:akkaserverless.crdt.StateManagementContext
         * @extends module:akkaserverless.CommandContext
         * @extends module:akkaserverless.EntityContext
         */

        this.addStateManagementToContext(ctx);

        ctx.subscribed = false;

        /**
         * Set a callback for handling state change events.
         *
         * This may only be invoked on streamed commands. If invoked on a non streamed command, it will throw an error.
         *
         * This will be invoked every time the state of this CRDT changes, allowing the callback to send messages to
         * the stream.
         *
         * @name module:akkaserverless.crdt.CrdtCommandContext#onStateChange
         * @type {module:akkaserverless.crdt.CrdtCommandContext~onStateChangeCallback}
         */
        Object.defineProperty(ctx.context, "onStateChange", {
          set: (handler) => {
            ctx.ensureActive();
            if (!ctx.streamed) {
              throw new Error("Cannot subscribe to updates from non streamed command")
            }
            this.subscribers.set(ctx.commandId.toString(), {
              commandId: ctx.commandId,
              handler: handler,
              grpcMethod: grpcMethod,
              metadata: ctx.context.metadata
            });
            ctx.subscribed = true;
          }
        });

        /**
         * Set a callback for handling the stream cancelled event.
         *
         * This may only be invoked on streamed commands. If invoked on a non streamed command, it will throw an error.
         *
         * This will be invoked if the client initiated a cancel, it will not be invoked if the stream was ended by
         * invoking {@link module:akkaserverless.crdt.StateChangedContext#end}.
         *
         * @name module:akkaserverless.crdt.CrdtCommandContext#onStreamCancel
         * @type {module:akkaserverless.crdt.CrdtCommandContext~onStreamCancelCallback}
         */
        Object.defineProperty(ctx.context, "onStreamCancel", {
          set: (handler) => {
            ctx.ensureActive();
            if (!ctx.streamed) {
              throw new Error("Cannot receive stream cancelled from non streamed command")
            }
            this.cancelledCallbacks.set(ctx.commandId.toString(), {
              commandId: command.id,
              handler: handler,
              grpcMethod: grpcMethod
            });
            ctx.subscribed = true;
          }
        });

        /**
         * Whether this command is streamed or not.
         *
         * @name module:akkaserverless.crdt.CrdtCommandContext#streamed
         * @type {boolean}
         * @readonly
         */
        Object.defineProperty(ctx.context, "streamed", {
          get: () => ctx.streamed === true
        });

        /**
         * Set the write consistency for replication of CRDT state.
         *
         * @name module:akkaserverless.crdt.CrdtCommandContext#writeConsistency
         * @type {module:akkaserverless.crdt.WriteConsistency}
         */
        Object.defineProperty(ctx.context, "writeConsistency", {
          get: () => ctx.writeConsistency,
          set: (writeConsistency) => ctx.writeConsistency = writeConsistency
        });

        const userReply = this.entity.commandHandlers[commandName](command, ctx.context);
        if (ctx.streamed && ctx.subscription === null) {
          // todo relax this requirement
          throw new Error("Streamed commands must be subscribed to using ctx.subscribe()");
        }

        this.setStateActionOnReply(ctx);

        if (ctx.subscribed) {
          ctx.reply.streamed = true;
        }

        return userReply;
      };
    } else {
      return null;
    }
  }

  setStateActionOnReply(ctx) {
    if (ctx.deleted) {
      ctx.commandDebug("Deleting entity");
      ctx.reply.stateAction = {
        delete: {},
        writeConsistency: ctx.writeConsistency
      };
      this.currentState = null;
      this.handleStateChange();
    } else if (this.currentState !== null) {
      const delta = this.currentState.getAndResetDelta();
      if (delta != null) {
        ctx.commandDebug("Updating entity");
        ctx.reply.stateAction = {
          update: delta,
          writeConsistency: ctx.writeConsistency
        };
        this.handleStateChange();
      }
    }
  }

  addStateManagementToContext(ctx) {
    ctx.deleted = false;
    ctx.noState = this.currentState === null;
    ctx.defaultValue = false;
    if (ctx.noState) {
      this.currentState = this.entity.defaultValue();
      if (this.currentState !== null) {
        this.entity.onStateSet(this.currentState, this.entityId);
        ctx.defaultValue = true;
      }
    }

    /**
     * Context that allows managing a CRDTs state.
     *
     * @interface module:akkaserverless.crdt.StateManagementContext
     */

    /**
     * Delete this CRDT.
     *
     * @function module:akkaserverless.crdt.StateManagementContext#delete
     */
    ctx.context.delete = () => {
      ctx.ensureActive();
      if (this.currentState === null) {
        throw new Error("Can't delete entity that hasn't been created.");
      } else if (ctx.noState) {
        this.currentState = null;
      } else {
        ctx.deleted = true;
      }
    };

    /**
     * The CRDT. It may only be set once, if it's already set, an error will be thrown.
     *
     * @name module:akkaserverless.crdt.StateManagementContext#state
     * @type {module:akkaserverless.crdt.CrdtState}
     */
    Object.defineProperty(ctx.context, "state", {
      get: () => {
        ctx.ensureActive();
        return this.currentState;
      },
      set: (state) => {
        ctx.ensureActive();
        if (this.currentState !== null) {
          throw new Error("Cannot create a new CRDT after it's been created.")
        } else if (typeof state.getAndResetDelta !== "function") {
          throw new Error(util.format("%o is not a CRDT", state));
        } else {
          this.currentState = state;
          this.entity.onStateSet(this.currentState, this.entityId);
        }
      }
    });
  }

  streamDebug(msg, ...args) {
    debug("%s [%s] - " + msg, ...[this.streamId, this.entityId].concat(args));
  }

  handleInitialDelta(delta) {
    this.streamDebug("Handling initial delta for CRDT type %s", delta.delta);
    if (this.currentState === null) {
      this.currentState = crdts.createCrdtForDelta(delta);
    }
    this.currentState.applyDelta(delta, this.entity.anySupport, crdts.createCrdtForDelta);
    this.entity.onStateSet(this.currentState, this.entityId);
  }

  onData(crdtStreamIn) {
    try {
      this.handleCrdtStreamIn(crdtStreamIn);
    } catch (err) {
      this.streamDebug("Error handling message, terminating stream: %o", crdtStreamIn);
      console.error(err);
      this.call.write({
        failure: {
          commandId: 0,
          description: "Fatal error handling message, check user container logs."
        }
      });
      this.call.end();
    }
  }

  handleStateChange() {
    this.subscribers.forEach((subscriber, key) => {
      /**
       * Context passed to {@link module:akkaserverless.crdt.CrdtCommandContext#onStateChange} handlers.
       *
       * @interface module:akkaserverless.crdt.StateChangedContext
       * @extends module:akkaserverless.CommandContext
       * @extends module:akkaserverless.EntityContext
       */
      const ctx = this.commandHelper.createContext(subscriber.commandId, subscriber.metadata);

      /**
       * The CRDT.
       *
       * @name module:akkaserverless.crdt.StateChangedContext#state
       * @type module:akkaserverless.crdt.CrdtState
       * @readonly
       */
      Object.defineProperty(ctx.context, "state", {
        get: () => {
          return this.currentState;
        }
      });

      /**
       * End this stream.
       *
       * @function module:akkaserverless.crdt.StateChangedContext#end
       */
      ctx.context.end = () => {
        ctx.reply.endStream = true;
        this.subscribers.delete(key);
        this.cancelledCallbacks.delete(key);
      };

      try {
        this.commandHelper.invokeHandler(() => {
          const userReply = subscriber.handler(this.currentState, ctx.context);
          if (this.currentState.getAndResetDelta() !== null) {
            throw new Error("State change handler attempted to modify state");
          }
          return userReply;
        }, ctx, subscriber.grpcMethod, msg => {
          if (ctx.effects.length > 0 || ctx.reply.endStream === true || ctx.reply.clientAction !== undefined) {
            return {
              streamedMessage: msg
            };
          }
        })
      } catch (e) {
        this.call.write({
          failure: {
            commandId: subscriber.commandId,
            description: util.format("Error: %o", e)
          }
        });
        this.call.end();
        // Probably rethrow?
      }
    });
  }

  handleStreamCancelled(cancelled) {
    const subscriberKey = cancelled.id.toString();
    const subscriber = this.subscribers.get(subscriberKey);
    let metadata = new Metadata([]);
    if (subscriber && subscriber.metadata) {
      metadata = subscriber.metadata;
    }
    this.subscribers.delete(subscriberKey);

    let response = {
      commandId: cancelled.id
    };

    try {
      if (this.cancelledCallbacks.has(subscriberKey)) {
        const subscriber = this.cancelledCallbacks.get(subscriberKey);

        /**
         * Context passed to {@link module:akkaserverless.crdt.CrdtCommandContext#onStreamCancel} handlers.
         *
         * @interface module:akkaserverless.crdt.StreamCancelledContext
         * @extends module:akkaserverless.EffectContext
         * @extends module:akkaserverless.EntityContext
         * @extends module:akkaserverless.crdt.StateManagementContext
         */

        const ctx = this.commandHelper.createContext(cancelled.id, metadata);
        ctx.reply = response;
        this.addStateManagementToContext(ctx);

        subscriber.handler(this.currentState, ctx.context);
        this.setStateActionOnReply(ctx);
        ctx.commandDebug("Sending streamed cancelled response");

        response = ctx.reply;
      }

      this.call.write({
        streamCancelledResponse: response
      });

    } catch (e) {
      this.call.write({
        failure: {
          commandId: cancelled.id,
          description: util.format("Error: %o", e)
        }
      });
      this.call.end();
    }
  }

  handleCrdtStreamIn(crdtStreamIn) {
    if (crdtStreamIn.delta && this.currentState === null) {
      this.handleInitialDelta(crdtStreamIn.delta)
    } else if (crdtStreamIn.delta) {
      this.streamDebug("Received delta for CRDT type %s", crdtStreamIn.delta.delta);
      this.currentState.applyDelta(crdtStreamIn.delta, this.entity.anySupport, crdts.createCrdtForDelta);
      this.handleStateChange();
    } else if (crdtStreamIn.delete) {
      this.streamDebug("Received CRDT delete");
      this.currentState = null;
      this.handleStateChange();
    } else if (crdtStreamIn.command) {
      this.commandHelper.handleCommand(crdtStreamIn.command);
    } else if (crdtStreamIn.streamCancelled) {
      this.handleStreamCancelled(crdtStreamIn.streamCancelled)
    } else {
      this.call.write({
        failure: {
          commandId: 0,
          description: util.format("Unknown message: %o", crdtStreamIn)
        }
      });
      this.call.end();
    }
  }

  onEnd() {
    this.streamDebug("Stream terminating");
    this.call.end();
  }

}

module.exports = {
  CrdtServices: CrdtServices,
  CrdtSupport: CrdtSupport,
  CrdtHandler: CrdtHandler
};
