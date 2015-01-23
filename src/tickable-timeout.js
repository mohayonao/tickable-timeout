"use strict";

/**
 * The manual ticking `setTimeout` / `clearTimeout`
 * @class
 * @property {function} callback
 * @property {number} timeout
 * @property {number} remain
 */
export class TickableTimeout {
  constructor() {
    this.callback = null;
    this.timeout = Infinity;
    this.remain = Infinity;
  }

  /**
   * setTimeout
   * @param {function} callback
   * @param {number} timeout
   * @public
   */
  set(callback, timeout) {
    this.callback = callback;
    this.timeout = Math.max(1, +timeout|0);
    this.remain = this.timeout;
  }

  /**
   * clearTimeout
   * @public
   */
  clear() {
    this.callback = null;
    this.timeout = Infinity;
    this.remain = Infinity;
  }

  /**
   * ticking
   * @param {number} tick
   * @public
   */
  tick(tick = 1) {
    if (typeof this.callback === "function") {
      tick = Math.max(1, +tick|0);
      this.remain -= tick;
      if (this.remain <= 0) {
        this.callback();
        this.callback = null;
        this.timeout = Infinity;
        this.remain = Infinity;
      }
    }
  }
}
