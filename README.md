# Future-Friendly [ESLint Shareable Config][docs] ![https://img.shields.io/npm/v/eslint-config-future.svg](https://img.shields.io/npm/v/eslint-config-future.svg?style=flat-square)

> [ESLint Shareable Config][docs] for Clean ES5/ES6/ES7 Javascript

[![](https://img.shields.io/github/issues-raw/ericclemmons/eslint-config-future.svg?style=flat-square)](https://github.com/ericclemmons/eslint-config-future/issues)
[![](https://img.shields.io/travis/ericclemmons/eslint-config-future/master.svg?style=flat-square)](https://travis-ci.org/ericclemmons/eslint-config-future)
[![](https://img.shields.io/david/ericclemmons/eslint-config-future.svg?style=flat-square)](https://david-dm.org/ericclemmons/eslint-config-future#info=dependencies)


## Philosophy

Most of these settings were based on best-practices widely followed within the
Javascript community, as well as some Symfony2 PHP conventions that greatly
enhance readability.

**If you disagree with some of the style choices, please [open an issue][issue].**
I'd love to learn & discuss better ways of styling & structuring code :)


## Examples

All tests are ran against the [`examples/`][examples] directory.


## Install

```shell
$ npm install eslint-config-future
```


## Usage

Add to your `.eslintrc` file:

```json
{
  "extends": "future"
}
```

If you use [React][react], there's a special version that leverages
[eslint-react-plugin][eslint-react]:


```json
{
  "extends": "future/react"
}
```


## Authors

- [Eric Clemmons](mailto:eric@smarterspam.com>) ([@ericclemmons][twitter])


## Collaboration

If you have questions or issues, please [open an issue][issue]!


## [License][license]

[MIT][license]. Copyright (c) Eric Clemmons



[docs]: http://eslint.org/docs/developer-guide/shareable-configs
[eslint-react]: https://github.com/yannickcr/eslint-plugin-react
[examples]: https://github.com/ericclemmons/eslint-config-future/tree/master/examples
[issue]: https://github.com/ericclemmons/eslint-config-future/issues/new
[license]: https://github.com/ericclemmons/eslint-config-future/blob/master/LICENSE
[react]: http://facebook.github.io/react/
[twitter]: https://twitter.com/ericclemmons/
