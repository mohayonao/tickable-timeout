"use strict";

import assert from "power-assert";
import {TickableTimeout} from "../lib/tickable-timeout";

describe("TickableTimeout", ()=> {
  it("works", ()=> {
    var fired = 0;
    var timeout = new TickableTimeout();

    assert(timeout instanceof TickableTimeout);

    // setTimeout
    timeout.set(() => { fired += 1 }, 1000);
    assert(fired === 0, "00:00.000");
    assert(timeout.remain === 1000, "00:00.000");

    // 00:00.000 -> 00:01.000
    timeout.tick(250);
    assert(fired === 0, "00:00.250");
    assert(timeout.remain === 750, "00:00.250");

    timeout.tick(250);
    assert(fired === 0, "00:00.500");
    assert(timeout.remain === 500, "00:00.500");

    timeout.tick(250);
    assert(fired === 0, "00:00.750");
    assert(timeout.remain === 250, "00:00.750");

    timeout.tick(250);
    assert(fired === 1, "00:01.000");
    assert(timeout.remain === Infinity, "00:01.000");

    // 00:01.000 -> 00:02.000
    timeout.tick(250);
    assert(fired === 1, "00:01.250");
    assert(timeout.remain === Infinity, "00:01.250");

    timeout.tick(250);
    assert(fired === 1, "00:01.500");
    assert(timeout.remain === Infinity, "00:01.500");

    timeout.tick(250);
    assert(fired === 1, "00:01.750");
    assert(timeout.remain === Infinity, "00:01.750");

    timeout.tick(250);
    assert(fired === 1, "00:02.000");
    assert(timeout.remain === Infinity, "00:02.000");
  });
  it("works with clear", ()=> {
    var fired = 0;
    var timeout = new TickableTimeout();

    assert(timeout instanceof TickableTimeout);

    // setTimeout
    timeout.set(() => { fired += 1 }, 1000);
    assert(fired === 0, "00:00.000");
    assert(timeout.remain === 1000, "00:00.000");

    // 00:00.000 -> 00:01.000
    timeout.tick(250);
    assert(fired === 0, "00:00.250");
    assert(timeout.remain === 750, "00:00.250");

    timeout.tick(250);
    assert(fired === 0, "00:00.500");
    assert(timeout.remain === 500, "00:00.500");

    // clearTimeout
    timeout.clear();
    assert(timeout.remain === Infinity, "00:00.500");

    timeout.tick(250);
    assert(fired === 0, "00:00.750");
    assert(timeout.remain === Infinity, "00:00.750");

    timeout.tick(250);
    assert(fired === 0, "00:01.000");
    assert(timeout.remain === Infinity, "00:01.000");
  });
});
