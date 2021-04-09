/*
 * Copyright 2019 Lightbend Inc.
 */

const path = require("path");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const debug = require("debug")("akkaserverless-action");
// Bind to stdout
debug.log = console.log.bind(console);
const AnySupport = require("./protobuf-any");
const EffectSerializer = require("./effect-serializer");
const Metadata = require("./metadata");
const CloudEvents = require("./cloudevents");

class ActionSupport {
  constructor(root, service, commandHandlers, allEntities) {
    this.root = root;
    this.service = service;
    this.commandHandlers = commandHandlers;
    this.anySupport = new AnySupport(this.root);
    this.effectSerializer = new EffectSerializer(allEntities);
  }
}

class ActionHandler {

  constructor(support, grpcMethod, commandHandler, call, grpcCallback, metadata) {
    this.support = support;
    this.grpcMethod = grpcMethod;
    this.commandHandler = commandHandler;
    this.call = call;
    this.grpcCallback = grpcCallback;

    this.streamId = Math.random().toString(16).substr(2, 7);
    this.streamDebug("Started new call");
    this.supportedEvents = [];
    this.callbacks = {};
    this.ctx = this.createContext(metadata);
  }

  streamDebug(msg, ...args) {
    debug("%s [%s.%s] - " + msg, ...[this.streamId, this.support.service.name, this.grpcMethod.name].concat(args));
  }

  /**
   * Context for an action command.
   *
   * @interface module:akkaserverless.Action.ActionCommandContext
   * @extends module:akkaserverless.CommandContext
   * @property {boolean} cancelled Whether the client is still connected.
   * @property {module:akkaserverless.Metadata} metadata The metadata associated with the command.
   * @property {module:akkaserverless.CloudEvent} cloudevent The CloudEvents metadata associated with the command.
   */
  createContext(metadata) {
    /**
     * Write a message.
     *
     * @function module:akkaserverless.Action.ActionCommandContext#write
     * @param {Object} message The protobuf message to write.
     * @param {module:akkaserverless.Metadata} metadata The metadata associated with the message.
     */

    const call = this.call;
    let metadataObject = new Metadata([]);
    if (metadata && metadata.entries) {
      metadataObject = new Metadata(metadata.entries);
    }
    const cloudevent = CloudEvents.toCloudevent(metadataObject.getMap);
    const ctx = {
      get cancelled() {
        return call.cancelled;
      },
      get metadata() {
        return metadata;
      },
      get cloudevent() {
        return cloudevent;
      }
    };

    /**
     * Register an event handler.
     *
     * @function module:akkaserverless.Action.ActionCommandContext#on
     * @param {string} eventType The type of the event.
     * @param {function} callback The callback to handle the event.
     */
    ctx.on = (eventType, callback) => {
      if (this.supportedEvents.includes(eventType)) {
        this.callbacks[eventType] = callback;
      } else {
        throw new Error("Unknown event type: " + eventType);
      }
    };
    return ctx;
  }

  invokeCallback(eventType, ...args) {
    if (this.callbacks.hasOwnProperty(eventType)) {
      this.invokeUserCallback(eventType + " event", this.callbacks[eventType], ...args)
    }
  }

  ensureNotCancelled() {
    if (this.call.cancelled) {
      throw new Error("Already replied to unary command, cannot interact further.")
    }
  }

  /**
   * Context for a unary action command.
   *
   * @interface module:akkaserverless.Action.UnaryCommandContext
   * @extends module:akkaserverless.Action.ActionCommandContext
   */
  handleUnary() {
    this.setupUnaryOutContext();
    //const deserializedCommand = this.support.anySupport.deserialize(this.call.request.payload);
    const userReturn = this.invokeUserCallback("command", this.commandHandler, null, this.ctx);
    if (userReturn !== undefined) {
      if (this.call.cancelled) {
        this.streamDebug("Unary command handler for command %s.%s both sent a reply through the context and returned a value, ignoring return value.", this.support.service.name, this.grpcMethod.name)
      } else {
        if (typeof userReturn.then === "function") {
          userReturn.then(this.ctx.write, this.ctx.fail)
        } else {
          this.ctx.write(userReturn);
        }
      }
    }
  }

  /**
   * Context for a streamed in action command.
   *
   * @interface module:akkaserverless.Action.StreamedInCommandContext
   * @extends module:akkaserverless.Action.StreamedInContext
   * @extends module:akkaserverless.Action.ActionCommandContext
   */
  handleStreamedIn() {
    this.setupUnaryOutContext();
    this.setupStreamedInContext();
    const userReturn = this.invokeUserCallback("command", this.commandHandler, this.ctx);
    if (userReturn !== undefined) {
      if (this.call.cancelled) {
        this.streamDebug("Streamed command handler for command %s.%s both sent a reply through the context and returned a value, ignoring return value.", this.support.service.name, this.grpcMethod.name)
      } else {
        if (typeof userReturn.then === "function") {
          userReturn.then(this.ctx.write, this.ctx.fail)
        } else {
          this.ctx.write(userReturn);
        }
      }
    }
  }

  /**
   * Context for a streamed out action command.
   *
   * @interface module:akkaserverless.Action.StreamedOutCommandContext
   * @extends module:akkaserverless.Action.StreamedOutContext
   */
  handleStreamedOut() {
    this.setupStreamedOutContext();
    const deserializedCommand = this.support.anySupport.deserialize(this.call.request.payload);
    this.invokeUserCallback("command", this.commandHandler, deserializedCommand, this.ctx);
  }

  /**
   * Context for a streamed action command.
   *
   * @interface module:akkaserverless.Action.StreamedCommandContext
   * @extends module:akkaserverless.Action.StreamedInContext
   * @extends module:akkaserverless.Action.StreamedOutContext
   */
  handleStreamed() {
    this.setupStreamedInContext();
    this.setupStreamedOutContext();
    this.invokeUserCallback("command", this.commandHandler, this.ctx);
  }

  setupUnaryOutContext() {
    const effects = [];

    this.ctx.thenForward = (method, message, metadata) => {
      this.ensureNotCancelled();
      this.streamDebug("Forwarding to %s", method);
      const forward = this.support.effectSerializer.serializeEffect(method, message, metadata);
      this.grpcCallback(null, {
        forward: forward,
        sideEffects: effects
      });
    };

    this.ctx.write = (message, metadata) => {
      this.ensureNotCancelled();
      this.streamDebug("Sending reply");
      if (message != null) {
        const messageProto = this.grpcMethod.resolvedResponseType.create(message);
        const replyPayload = AnySupport.serialize(messageProto, false, false);
        let replyMetadata = null;
        if (metadata && metadata.entries) {
          replyMetadata = {
            entries: metadata.entries
          };
        }
        this.grpcCallback(null, {
          reply: {
            payload: replyPayload,
            metadata: replyMetadata
          },
          sideEffects: effects
        });
      } else { // empty reply
        this.grpcCallback(null, {
          sideEffects: effects
        });
      }
    };

    this.ctx.effect = (method, message, synchronous, metadata) => {
      this.ensureNotCancelled();
      this.streamDebug("Emitting effect to %s", method);
      effects.push(this.support.effectSerializer.serializeSideEffect(method, message, synchronous, metadata));
    };

    this.ctx.fail = error => {
      this.ensureNotCancelled();
      this.streamDebug("Failing with %s", error);
      this.grpcCallback(null, {
        failure: {
          description: error
        },
        sideEffects: effects
      });
    };
  }

  /**
   * Context for an action command that returns a streamed message out.
   *
   * @interface module:akkaserverless.Action.StreamedOutContext
   * @extends module:akkaserverless.Action.ActionCommandContext
   */
  setupStreamedOutContext() {
    let effects = [];

    /**
     * A cancelled event.
     *
     * @event module:akkaserverless.Action.StreamedOutContext#cancelled
     */
    this.supportedEvents.push("cancelled");

    this.call.on("cancelled", () => {
      this.streamDebug("Received stream cancelled");
      this.invokeCallback("cancelled", this.ctx);
    });

    /**
     * Terminate the outgoing stream of messages.
     *
     * @function module:akkaserverless.Action.StreamedOutContext#end
     */
    this.ctx.end = () => {
      if (this.call.cancelled) {
        this.streamDebug("end invoked when already cancelled.");
      } else {
        this.streamDebug("Ending stream out");
        this.call.end();
      }
    };

    this.ctx.thenForward = (method, message, metadata) => {
      this.ensureNotCancelled();
      this.streamDebug("Forwarding to %s", method);
      const forward = this.support.effectSerializer.serializeEffect(method, message, metadata);
      this.call.write({
        forward: forward,
        sideEffects: effects
      });
      effects = []; // clear effects after each streamed write
    };

    this.ctx.write = (message, metadata) => {
      this.ensureNotCancelled();
      this.streamDebug("Sending reply");
      if (message != null) {
        const messageProto = this.grpcMethod.resolvedResponseType.create(message);
        const replyPayload = AnySupport.serialize(messageProto, false, false);
        let replyMetadata = null;
        if (metadata && metadata.entries) {
          replyMetadata = {
            entries: metadata.entries
          };
        }
        this.call.write({
          reply: {
            payload: replyPayload,
            metadata: replyMetadata
          },
          sideEffects: effects
        });
      } else { // empty reply
        this.call.write({
          sideEffects: effects
        });
      }
      effects = []; // clear effects after each streamed write
    };

    this.ctx.effect = (method, message, synchronous, metadata) => {
      this.ensureNotCancelled();
      this.streamDebug("Emitting effect to %s", method);
      effects.push(this.support.effectSerializer.serializeSideEffect(method, message, synchronous, metadata));
    };

    this.ctx.fail = error => {
      this.ensureNotCancelled();
      this.streamDebug("Failing with %s", error);
      this.call.write({
        failure: {
          description: error
        },
        sideEffects: effects
      });
      effects = []; // clear effects after each streamed write
    };
  }

  /**
   * Context for an action command that handles streamed messages in.
   *
   * @interface module:akkaserverless.Action.StreamedInContext
   * @extends module:akkaserverless.Action.ActionCommandContext
   */
  setupStreamedInContext() {
    /**
     * A data event.
     *
     * Emitted when a new message arrives.
     *
     * @event module:akkaserverless.Action.StreamedInContext#data
     * @type {Object}
     */
    this.supportedEvents.push("data");

    /**
     * A stream end event.
     *
     * Emitted when the input stream terminates.
     *
     * @event module:akkaserverless.Action.StreamedInContext#end
     */
    this.supportedEvents.push("end");

    this.call.on("data", (data) => {
      this.streamDebug("Received data in");
      const deserializedCommand = this.support.anySupport.deserialize(data.payload);
      this.invokeCallback("data", deserializedCommand, this.ctx);
    });

    this.call.on("end", () => {
      this.streamDebug("Received stream end");
      this.invokeCallback("end", this.ctx);
    });

    /**
     * Cancel the incoming stream of messages.
     *
     * @function module:akkaserverless.Action.StreamedInContext#cancel
     */
    this.ctx.cancel = () => {
      if (this.call.cancelled) {
        this.streamDebug("cancel invoked when already cancelled.");
      } else {
        this.call.cancel();
      }
    }
  }

  invokeUserCallback(callbackName, callback, ...args) {
    try {
      return callback.apply(null, args);
    } catch (err) {
      const error = "Error handling " + callbackName;
      this.streamDebug(error);
      console.error(err);
      if (!this.call.cancelled) {
        const failure = {
          failure: {
            description: error
          },
        };
        if (this.grpcCallback != null) {
          this.grpcCallback(null, failure);
        } else {
          this.call.write(failure);
          this.call.end();
        }
      }
    }
  }
}

module.exports = class ActionServices {

  constructor() {
    this.services = {};
  }

  addService(component, allComponents) {
    this.services[component.serviceName] = new ActionSupport(component.root, component.service,
        component.commandHandlers, allComponents);
  }

  componentType() {
    return "akkaserverless.component.action.Actions";
  }

  register(server) {
    const includeDirs = [
      path.join(__dirname, "..", "proto"),
      path.join(__dirname, "..", "protoc", "include")
    ];
    const packageDefinition = protoLoader.loadSync(path.join("akkaserverless", "component", "action", "action.proto"), {
      includeDirs: includeDirs
    });
    const grpcDescriptor = grpc.loadPackageDefinition(packageDefinition);

    const actionService = grpcDescriptor.akkaserverless.component.action.Actions.service;

    server.addService(actionService, {
      handleUnary: this.handleUnary.bind(this),
      handleStreamedIn: this.handleStreamedIn.bind(this),
      handleStreamedOut: this.handleStreamedOut.bind(this),
      handleStreamed: this.handleStreamed.bind(this),
    });
  }

  createHandler(call, callback, data) {
    const service = this.services[data.serviceName];
    if (service && service.service.methods.hasOwnProperty(data.name)) {
      if (service.commandHandlers.hasOwnProperty(data.name)) {
        return new ActionHandler(service, service.service.methods[data.name], service.commandHandlers[data.name], call, callback, data.metadata)
      } else {
        this.reportError("Service call " + data.serviceName + "." + data.name + " not implemented", call, callback)
      }
    } else {
      this.reportError("No service call named " + data.serviceName + "." + data.name + " found", call, callback)
    }
  }

  reportError(error, call, callback) {
    console.warn(error);
    const failure = {
      failure: {
        description: error
      }
    };
    if (callback !== null) {
      callback(null, failure);
    } else {
      call.write(failure);
      call.end();
    }
  }

  handleStreamed(call) {
    let initial = true;
    call.on("data", data => {
      if (initial) {
        initial = false;
        const handler = this.createHandler(call, null, data);
        if (handler) {
          handler.handleStreamed();
        }
      } // ignore the remaining data here, subscribed in setupStreamedInContext
    });
  }

  handleStreamedOut(call) {
    const handler = this.createHandler(call, null, call.request);
    if (handler) {
      handler.handleStreamedOut();
    }
  }

  handleStreamedIn(call, callback) {
    let initial = true;
    call.on("data", data => {
      if (initial) {
        initial = false;
        const handler = this.createHandler(call, callback, data);
        if (handler) {
          handler.handleStreamedIn();
        }
      } // ignore the remaining data here, subscribed in setupStreamedInContext
    });
  }

  handleUnary(call, callback) {
    const handler = this.createHandler(call, callback, call.request);
    if (handler) {
      handler.handleUnary();
    }
  }

};
