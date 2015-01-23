# tickable-timeout
[![Build Status](http://img.shields.io/travis/mohayonao/tickable-timeout.svg?style=flat)](https://travis-ci.org/mohayonao/tickable-timeout)
[![NPM Version](http://img.shields.io/npm/v/tickable-timeout.svg?style=flat)](https://www.npmjs.org/package/tickable-timeout)
[![6to5](http://img.shields.io/badge/module-6to5-yellow.svg?style=flat)](https://6to5.org/)

Manual ticking `setTimeout` / `clearTimeout`

## Installation

npm:
```
npm install tickable-timeout
```

## API

### TickableTimeout
  - `TickableTimeout()`

#### Instance properties
- `callback: function`
- `delay: number`
- `remain: number`

### Instance methods
  - `set(callback: function, delay: number): void`
  - `clear(): void`
  - `tick(tick: number = 1): void`

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
