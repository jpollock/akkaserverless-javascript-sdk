/*
 * Copyright 2019 Lightbend Inc.
 */

const fs = require("fs");
const protobufHelper = require("./protobuf-helper");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const AkkaServerless = require("./akkaserverless");
const crdts = require("./crdts");
const support = require("./crdt-support");

const crdtServices = new support.CrdtServices();

/**
 * Options for creating a CRDT entity.
 *
 * @typedef module:akkaserverless.crdt.Crdt~options
 * @property {array<string>} includeDirs The directories to include when looking up imported protobuf files.
 */

/**
 * A command handler callback.
 *
 * @callback module:akkaserverless.crdt.Crdt~commandHandler
 * @param {Object} command The command message, this will be of the type of the gRPC service call input type.
 * @param {module:akkaserverless.crdt.CrdtCommandContext} context The command context.
 * @returns {undefined|Object} The message to reply with, it must match the gRPC service call output type for this
 * command.
 */

/**
 * A state set handler callback.
 *
 * This is invoked whenever a new state is set on the CRDT, to allow the state to be enriched with domain specific
 * properties and methods. This may be due to the state being set explicitly from a command handler on the command
 * context, or implicitly as the default value, or implicitly when a new state is received from the proxy.
 *
 * @callback module:akkaserverless.crdt.Crdt~onStateSetCallback
 * @param {module:akkaserverless.crdt.CrdtState} state The state that was set.
 * @param {string} entityId The id of the entity.
 */

/**
 * A callback that is invoked to create a default value if the Akka Serverless proxy doesn't send an existing one.
 *
 * @callback module:akkaserverless.crdt.Crdt~defaultValueCallback
 * @param {string} entityId The id of the entity.
 * @returns {Object} The default value to use for this entity.
 */

/**
 * A CRDT entity.
 *
 * @memberOf module:akkaserverless.crdt
 * @extends module:akkaserverless.Entity
 */
class Crdt {

  /**
   * Create a CRDT entity.
   *
   * @param desc {string|string[]} The file name of a protobuf descriptor or set of descriptors containing the
   * CRDT service.
   * @param serviceName {string} The fully qualified name of the gRPC service that this CRDT implements.
   * @param {string} entityType The entity type name, used to namespace entities of different CRDT
   *                            types in the same service.
   * @param options {module:akkaserverless.crdt.Crdt~options=} The options.
   */
  constructor(desc, serviceName, entityType, options) {

    this.options = {
      ...{
        includeDirs: ["."],
        entityType: entityType
      },
      ...options
    };
    if (!entityType) throw Error("EntityType must contain a name")

    const allIncludeDirs = protobufHelper.moduleIncludeDirs
      .concat(this.options.includeDirs);

    this.root = protobufHelper.loadSync(desc, allIncludeDirs);

    this.serviceName = serviceName;
    // Eagerly lookup the service to fail early
    this.service = this.root.lookupService(serviceName);

    const packageDefinition = protoLoader.loadSync(desc, {
      includeDirs: allIncludeDirs
    });
    this.grpc = grpc.loadPackageDefinition(packageDefinition);

    /**
     * The command handlers.
     *
     * The names of the properties must match the names of the service calls specified in the gRPC descriptor for this
     * CRDTs service.
     *
     * @type {Object.<string, module:akkaserverless.crdt.Crdt~commandHandler>}
     */
    this.commandHandlers = {};

    /**
     * A callback that is invoked whenever the state is set for this CRDT.
     *
     * This is invoked whenever a new state is set on the CRDT, to allow the state to be enriched with domain specific
     * properties and methods. This may be due to the state being set explicitly from a command handler on the command
     * context, or implicitly as the default value, or implicitly when a new state is received from the proxy.
     *
     * @member {module:akkaserverless.crdt.Crdt~onStateSetCallback} module:akkaserverless.crdt.Crdt#onStateSet
     */
    this.onStateSet = (state, entityId) => undefined;

    /**
     * A callback that is invoked to create a default value if the Akka Serverless proxy doesn't send an existing one.
     *
     * @member {module:akkaserverless.crdt.Crdt~defaultValueCallback} module:akkaserverless.crdt.Crdt#defaultValue
     */
    this.defaultValue = (entityId) => null;
  }

  componentType() {
    return crdtServices.componentType();
  }

  /**
   * Lookup a Protobuf message type.
   *
   * This is provided as a convenience to lookup protobuf message types for use, for example, as values in sets and
   * maps.
   *
   * @param {string} messageType The fully qualified name of the type to lookup.
   */
  lookupType(messageType) {
    return this.root.lookupType(messageType);
  }

  register(allEntities) {
    crdtServices.addService(this, allEntities);
    return crdtServices;
  }

  start(options) {
    if (this.server !== undefined) {
      throw new Error("Server already started!")
    }
    this.server = new AkkaServerless();
    this.server.addComponent(this);

    return this.server.start(options);
  }

  shutdown() {
    if (this.server === undefined) {
      throw new Error("Server not started!")
    }
    this.server.shutdown();
    delete this.server;
  }
}

module.exports = {
  Crdt: Crdt,
  GCounter: crdts.GCounter,
  PNCounter: crdts.PNCounter,
  GSet: crdts.GSet,
  ORSet: crdts.ORSet,
  LWWRegister: crdts.LWWRegister,
  Flag: crdts.Flag,
  ORMap: crdts.ORMap,
  Vote: crdts.Vote,
  Clocks: crdts.Clocks,
  WriteConsistencies: crdts.WriteConsistencies
};
