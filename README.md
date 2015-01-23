# tickable-timeout
[![Build Status](http://img.shields.io/travis/mohayonao/tickable-timeout.svg?style=flat)](https://travis-ci.org/mohayonao/tickable-timeout)
[![NPM Version](http://img.shields.io/npm/v/tickable-timeout.svg?style=flat)](https://www.npmjs.org/package/tickable-timeout)

Manual ticking `setTimeout`.

## Installation

```
npm install tickable-timeout
```

## API

- `set(callback: function, timeout: number): void`
- `clear(): void`
- `tick(tick: number): void`

## Example

```javascript
import {TickableTimeout} from "tickable-timeout";

var timeout = new TickableTimeout();

timeout.set(()=> {
  console.log("fired");
}, 1000);

timeout.tick(250);
timeout.tick(250);
timeout.tick(250);
timeout.tick(250); // => "fired"

timeout.tick(250);
timeout.tick(250);
timeout.tick(250);
timeout.tick(250);

timeout.clear();
```

## License

MIT
