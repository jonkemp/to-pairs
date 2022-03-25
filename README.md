# to-pairs ![Build Status](https://github.com/jonkemp/to-pairs/actions/workflows/main.yml/badge.svg?branch=master)

> Convert an object into an array.

Inspired by `_.pairs`. 😄


## Install

Install with [npm](https://npmjs.org/package/to-pairs)

```
$ npm install to-pairs
```

Or [unpkg](https://unpkg.com/to-pairs/)

```
<script src="https://unpkg.com/to-pairs@1.0.1/umd/index.js" />
```

Check out the unit tests on [CodePen](https://codepen.io/jonkemp/full/zYGeNrb).

## Usage

```js
const toPairs = require('to-pairs');

toPairs({one: 1, two: 2, three: 3});
//=> [["one", 1], ["two", 2], ["three", 3]]
```

---
| **Like us a lot?** Help others know why you like us! **Review this package on [pkgreview.dev](https://pkgreview.dev/npm/to-pairs)** | ➡   | [![Review us on pkgreview.dev](https://i.ibb.co/McjVMfb/pkgreview-dev.jpg)](https://pkgreview.dev/npm/to-pairs) |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --- | --------------------------------------------------------------------------------------------------------------------- |

## API

### toPairs(object)

#### list

Type: `object`  
Default: `none`

The object to convert.

## License

MIT
