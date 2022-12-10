

# possible-numbers
[![CI][ci-image]][ci-url]

with this package you can generate All possible numbers with specific length

## Installation and Usage

### Server-side usage

Install the library with `npm install possible-numbers`

#### No ES6

```javascript
var all_possible_nums = require('possible-numbers');

let allCombitions = all_possible_nums({
    "one": [1],
    "two": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "three": [1]
})

console.log(allCombitions) //=> [
//   111, 121, 131,
//   141, 151, 161,
//   171, 181, 191
// ]
```

#### ES6

```javascript
import all_possible_nums from "possible-numbers";
```

## Maintainers

- [alireza kargar](https://github.com/alirezakargar1380) - **alireza kargar** (author)

[ci-url]: https://github.com/validatorjs/validator.js/actions?query=workflow%3ACI
[ci-image]: https://github.com/validatorjs/validator.js/workflows/CI/badge.svg?branch=master

