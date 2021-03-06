/*
 * Copyright 2019 Lightbend Inc.
 */

const debug = require("debug")("akkaserverless-crdt");
const util = require("util");
const AnySupport = require("../protobuf-any");

/**
 * @classdesc An Observed-Removed Set CRDT.
 *
 * Observed-Removed-Set's are a set of {@link module:akkaserverless.Serializable} values. Elements can be added and removed.
 *
 * @constructor module:akkaserverless.crdt.ORSet
 * @implements module:akkaserverless.crdt.CrdtState
 */
function ORSet() {
  // Map of a comparable form (that compares correctly using ===) of the elements to the elements
  let currentValue = new Map();
  let delta = {
    added: new Map(),
    removed: new Map(),
    cleared: false
  };

  /**
   * Does this set contain the given element?
   *
   * @function module:akkaserverless.crdt.ORSet#has
   * @param {module:akkaserverless.Serializable} element The element to check.
   * @returns {boolean} True if the set contains the element.
   */
  this.has = function (element) {
    return currentValue.has(AnySupport.toComparable(element));
  };

  /**
   * The number of elements in this set.
   *
   * @name module:akkaserverless.crdt.ORSet#size
   * @type {number}
   * @readonly
   */
  Object.defineProperty(this, "size", {
    get: function () {
      return currentValue.size;
    }
  });

  /**
   * Callback for handling elements iterated through by {@link module:akkaserverless.crdt.ORSet#forEach}.
   *
   * @callback module:akkaserverless.crdt.ORSet~forEachCallback
   * @param {module:akkaserverless.Serializable} element The element.
   */

  /**
   * Execute the given callback for each element.
   *
   * @function module:akkaserverless.crdt.ORSet#forEach
   * @param {module:akkaserverless.crdt.ORSet~forEachCallback} callback The callback to handle each element.
   */
  this.forEach = function (callback) {
    return currentValue.forEach((value, key) => callback(value));
  };

  /**
   * Create an iterator for this set.
   *
   * @function module:akkaserverless.crdt.ORSet#@@iterator
   * @returns {iterator<module:akkaserverless.Serializable>}
   */
  this[Symbol.iterator] = function () {
    return currentValue.values();
  };

  /**
   * Add an element to this set.
   *
   * @function module:akkaserverless.crdt.ORSet#add
   * @param {module:akkaserverless.Serializable} element The element to add.
   * @return {module:akkaserverless.crdt.ORSet} This set.
   */
  this.add = function (element) {
    const comparable = AnySupport.toComparable(element);
    if (!currentValue.has(comparable)) {
      if (delta.removed.has(comparable)) {
        delta.removed.delete(comparable)
      } else {
        const serializedElement = AnySupport.serialize(element, true, true);
        delta.added.set(comparable, serializedElement);
      }
      currentValue.set(comparable, element);
    }
    return this;
  };

  /**
   * Remove an element from this set.
   *
   * @function module:akkaserverless.crdt.ORSet#delete
   * @param {module:akkaserverless.Serializable} element The element to delete.
   * @return {module:akkaserverless.crdt.ORSet} This set.
   */
  this.delete = function (element) {
    const comparable = AnySupport.toComparable(element);
    if (currentValue.has(comparable)) {
      if (currentValue.size === 1) {
        this.clear();
      } else {
        currentValue.delete(comparable);
        if (delta.added.has(comparable)) {
          delta.added.delete(comparable);
        } else {
          const serializedElement = AnySupport.serialize(element, true, true);
          delta.removed.set(comparable, serializedElement);
        }
      }
    }
    return this;
  };

  /**
   * Remove all elements from this set.
   *
   * @function module:akkaserverless.crdt.ORSet#clear
   * @return {module:akkaserverless.crdt.ORSet} This set.
   */
  this.clear = function () {
    if (currentValue.size > 0) {
      delta.cleared = true;
      delta.added.clear();
      delta.removed.clear();
      currentValue.clear();
    }
    return this;
  };

  this.getAndResetDelta = function (initial) {
    if (delta.cleared || delta.added.size > 0 || delta.removed.size > 0 || initial) {
      const crdtDelta = {
        orset: {
          cleared: delta.cleared,
          removed: Array.from(delta.removed.values()),
          added: Array.from(delta.added.values())
        }
      };
      delta.cleared = false;
      delta.added.clear();
      delta.removed.clear();
      return crdtDelta;
    } else {
      return null;
    }
  };

  this.applyDelta = function (delta, anySupport) {
    if (!delta.orset) {
      throw new Error(util.format("Cannot apply delta %o to ORSet", delta));
    }
    if (delta.orset.cleared) {
      currentValue.clear();
    }
    if (delta.orset.removed !== undefined) {
      delta.orset.removed.forEach(element => {
        const value = anySupport.deserialize(element);
        const comparable = AnySupport.toComparable(value);
        if (currentValue.has(comparable)) {
          currentValue.delete(comparable);
        } else {
          debug("Delta instructed to delete element [%o], but it wasn't in the ORSet.", comparable)
        }
      });
    }
    if (delta.orset.added !== undefined) {
      delta.orset.added.forEach(element => {
        const value = anySupport.deserialize(element);
        const comparable = AnySupport.toComparable(value);
        if (currentValue.has(comparable)) {
          debug("Delta instructed to add value [%o], but it's already present in the ORSet", comparable);
        } else {
          currentValue.set(comparable, value);
        }
      });
    }
  };

  this.toString = function () {
    return "ORSet(" + Array.from(currentValue).join(",") + ")";
  };
}

module.exports = ORSet;
