# Googleflog

```js
var googleflog = require('googleflog');

googleflog.translate('Me encanta Googleflog jaja saludos');
// ** meE eEñcAñTA G0o0oGleEfl0oG jAjA zhAlud0ozh -- <3
```

This repository is both an `npm` package and a web application using Github Pages.

## Installation
This repository provides a library that's distributed by `npm`.

```bash
$ npm install googleflog
```

You can also install using `bower`.

```bash
$ bower install kinduff/googleflog
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
This repository includes the following gulp tasks.
- **copy**: Copies `src/googleflog.js` to `dist/googleflog.js`.
- **minify**: Minifies, compresses and mangles `src/googleflog.js` to `dist/googleflog.min.js`.
- **js**: Concats and minifies `dist/googleflog.min.js` and `app/src/js/script.js` to `app/dist/app.js`.
- **css**: Uses SCSS to process `app/src/style/*.scss` to `app/dist/style/*.css`.
- **images**: Copies images from `app/src/images/*/**` to `app/dist/images`.
- **jade**: Uses Jade to process `app/src/*.jade` to `app/dist`.

These gulp tasks can be used in the following way:
- **default**: Runs `copy` and `minify`, useful to deploy new version and update `dist`.
- **app**: Runs `default`, `js`, `css`, `images` and `jade`, useful to update the app with the latest version and latest `app/src` content.
- **deploy**: Runs `app`, grabs content from `app/dist/**/*` and deploys a Github Page (push disabled).

## Test
Uses `mocha` and `assert` for testing. Use `npm` to run the tests.

```
$ npm test
```

## License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
