"use strict";

/**
* The manual ticking `setTimeout`
* @class TickableTimeout
*/
export class TickableTimeout {
  constructor() {
    if (!(this instanceof TickableTimeout)) {
      return new TickableTimeout();
    }

    var _callback = null;
    var _timeout = Infinity;

    /**
    * @api public
    * @param {function} callback
    * @param {number} timeout
    */
    this.set = (callback, timeout)=> {
      _callback = callback;
      _timeout = Math.max(1, +timeout);
    };

    /**
    * @api public
    */
    this.clear = ()=> {
      _callback = null;
      _timeout = Infinity;
    };

    /**
    * @api public
    * @param {number} tick
    */
    this.tick = (tick)=> {
      if (typeof _callback === "function") {
        _timeout -= tick;
        if (_timeout <= 0) {
          _callback();
          _callback = null;
        }
      }
    };
  }
}
