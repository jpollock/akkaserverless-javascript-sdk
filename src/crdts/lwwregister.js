/*
 * Copyright 2019 Lightbend Inc.
 */

const util = require("util");
const protobufHelper = require("../protobuf-helper");
const AnySupport = require("../protobuf-any");

const Clocks = protobufHelper.moduleRoot.akkaserverless.component.crdt.CrdtClock;

/**
 * @classdesc A Last-Write-Wins Register CRDT.
 *
 * A last write wins register uses a clock to determine which of two concurrent updates should win. The clock is
 * represented as a number. The default clock uses the proxies system time, custom clocks can supply a custom number
 * to be used. If two clock values are equal, the write from the node with the lowest address wins.
 *
 * @constructor module:akkaserverless.crdt.LWWRegister
 * @implements module:akkaserverless.crdt.CrdtState
 * @param {module:akkaserverless.Serializable} value A value to hold in the register.
 * @param {module:akkaserverless.crdt.Clock} [clock=Clocks.DEFAULT] The clock to use.
 * @param {number} [customClockValue=0] The custom clock value, if using a custom clock.
 */
function LWWRegister(value, clock = Clocks.DEFAULT, customClockValue = 0) {
  if (value === null || value === undefined) {
    throw new Error("LWWRegister must be instantiated with an initial value.")
  }
  // Make sure the value can be serialized.
  let serializedValue = AnySupport.serialize(value, true, true);
  let currentValue = value;
  // Always start with the initialized value as the delta, to send this value to the proxy
  let delta = {
    value: serializedValue,
    clock: clock,
    customClockValue: customClockValue
  };

  /**
   * The value of this register.
   *
   * Setting it will cause it to be set with the default clock.
   *
   * @name module:akkaserverless.crdt.LWWRegister#value
   * @type {module:akkaserverless.Serializable}
   */
  Object.defineProperty(this, "value", {
    get: function () {
      return currentValue;
    },
    set: function (value) {
      this.setWithClock(value)
    }.bind(this)
  });

  /**
   * Set the the value using a custom clock.
   *
   * @function module:akkaserverless.crdt.LWWRegister#setWithClock
   * @param {module:akkaserverless.Serializable} value The value to set.
   * @param {module:akkaserverless.crdt.Clock} [clock=Clocks.DEFAULT] The clock.
   * @param {number} [customClockValue=0] Ignored if a custom clock isn't specified.
   */
  this.setWithClock = function (value, clock = Clocks.DEFAULT, customClockValue = 0) {
    delta.value = AnySupport.serialize(value, true, true);
    if (clock !== undefined) {
      delta.clock = clock;
      delta.customClockValue = customClockValue;
    }
    currentValue = value;
    return this;
  };

  this.resetDelta = function() {
    delta = {
      value: null,
      clock: null,
      customClockValue: 0
    };
  }

  this.getAndResetDelta = function () {
    if (delta.value !== null) {
      const toReturn = delta;
      this.resetDelta();
      return {
        lwwregister: toReturn
      };
    } else {
      return null;
    }
  };

  this.applyDelta = function (delta, anySupport) {
    if (!delta.lwwregister) {
      throw new Error(util.format("Cannot apply delta %o to LWWRegister", delta));
    }
    this.resetDelta();
    currentValue = anySupport.deserialize(delta.lwwregister.value);
  };

  this.toString = function () {
    return "LWWRegister(" + currentValue + ")";
  };
}

module.exports = LWWRegister;
