"use strict";

import support from "source-map-support";
support.install();

import assert from "power-assert";
import {TickableTimeout} from "../lib/tickable-timeout";

describe("TickableTimeout", ()=> {
  it("works", ()=> {
    var fired = 0;
    var timeout = new TickableTimeout();

    assert(timeout instanceof TickableTimeout);

    // setTimeout
    timeout.set(() => { fired += 1 }, 1000);

    // 00:00.000 -> 00:01.000
    timeout.tick(250);
    assert(fired === 0);

    timeout.tick(250);
    assert(fired === 0);

    timeout.tick(250);
    assert(fired === 0);

    timeout.tick(250);
    assert(fired === 1);

    // 00:01.000 -> 00:02.000
    timeout.tick(250);
    assert(fired === 1);

    timeout.tick(250);
    assert(fired === 1);

    timeout.tick(250);
    assert(fired === 1);

    timeout.tick(250);
    assert(fired === 1);
  });
  it("works with clear", ()=> {
    var fired = 0;
    var timeout = new TickableTimeout();

    assert(timeout instanceof TickableTimeout);

    // setTimeout
    timeout.set(() => { fired += 1 }, 1000);

    // 00:00.000 -> 00:01.000
    timeout.tick(250);
    assert(fired === 0);

    timeout.tick(250);
    assert(fired === 0);

    // clearTimeout
    timeout.clear();

    timeout.tick(250);
    assert(fired === 0);

    timeout.tick(250);
    assert(fired === 0);
  });
});
