fastcase
========

fast and simple camel/snake case converter

[![npm version](https://badge.fury.io/js/%40fastcampus%2Ffastcase.svg)](https://badge.fury.io/js/%40fastcampus%2Ffastcase)

## Getting Started

```js
const { toCameCaseFast, toSnakeCaseFast, toCamelCaseKeys, toSnakeCaseKeys } = require('@fastcampus/fastcase');

console.log(toCameCaseFast('foo_bar_baz_qux'));
// fooBarBazQux

console.log(toSnakeCaseFast('fooBarBazQux'));
// foo_bar_baz_qux

console.log(toCamelCaseKeys({ foo_bar:'hello', baz_qux: 'world' }));
// { fooBar: 'hello', bazQux: 'world' }

console.log(toSnakeCaseKeys({ fooBar:'hello', bazQux: 'world' }));
// { foo_bar: 'hello', baz_qux: 'world' }
```

## Contributing

### lint

```console
$ npm run lint
```

### test

```console
$ npm run test
```

may the **SOURCE** be with you...

