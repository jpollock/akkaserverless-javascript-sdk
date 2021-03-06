/*
 * Copyright 2019 Lightbend Inc.
 */

const util = require("util");

/**
 * @classdesc A flag CRDT.
 *
 * A flag starts out as being false (disabled), and then can be set to true (enabled). Once set to true, it stays true.
 *
 * @constructor module:akkaserverless.crdt.Flag
 * @implements module:akkaserverless.crdt.CrdtState
 */
function Flag() {
  let currentValue = false;
  let delta = false;

  /**
   * Whether this flag is enabled or not.
   *
   * @name module:akkaserverless.crdt.Flag#value
   * @type {boolean}
   * @readonly
   */
  Object.defineProperty(this, "value", {
    get: function () {
      return currentValue;
    }
  });

  /**
   * Enable this flag.
   *
   * @function module:akkaserverless.crdt.Flag#enable
   * @returns {module:akkaserverless.crdt.Flag} This flag.
   */
  this.enable = function () {
    if (!currentValue) {
      currentValue = true;
      delta = true;
    }
    return this;
  };

  this.getAndResetDelta = function (initial) {
    if (delta || initial) {
      delta = false;
      return {
        flag: {
          value: currentValue
        }
      };
    } else {
      return null;
    }
  };

  this.applyDelta = function (delta) {
    if (!delta.flag) {
      throw new Error(util.format("Cannot apply delta %o to Flag", delta));
    }
    currentValue = currentValue || delta.flag.value;
  };

  this.toString = function () {
    return "Flag(" + currentValue + ")";
  };
}

module.exports = Flag;
