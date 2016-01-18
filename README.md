# Googleflog

```js
var googleflog = require('googleflog');

googleflog.translate('Me encanta Googleflog jaja saludos');
// ** meE eEñcAñTA G0o0oGleEfl0oG jAjA zhAlud0ozh -- <3
```

## Installation
This repository provides a library that's distributed by `npm`.

```bash
$ npm install googleflog
```

You can also install using `bower`.

```bash
$ bower install kinduff/googleflog-pkg
```

## Support
This module can be used in:
- AMD
- CommonJS
- Browser
- Node.js

## Usage
All the code is documented, but here is a brief usage example.

```js
var googleflog = require('googleflog');

// default options
googleflog.translate('Me encanta Googleflog jaja saludos', {
  noHead: false,   // no head on result
  noTail: false,   // no tail on result
  noTrails: false, // just the result
  head: '',        // custom head for result
  tail: ''         // custom tail for result
});
// ** meE eEñcAñTA G0o0oGleEfl0oG jAjA zhAlud0ozh -- <3

// randomized custom head and tail values
googleflog.headMap = ['¸„.-•~¹°”ˆ˜¨', '8>'];
googleflog.tailMap = ['¨˜ˆ”°¹~•-.„¸', '<8'];

googleflog.t('ola k ase'); // .t() is an alias for translate
// ¸„.-•~¹°”ˆ˜¨ 0olA Q AzheE <8
```

## Gulp tasks
To generate the original and minified versions for the `dist` folder.

```
$ gulp
```

## Test
Uses `mocha` and `assert` for testing. Use `npm` to run the tests.

```
$ npm test
```

## License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
