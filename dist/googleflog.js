'use strict';

// +---------------------------------------------+
// |                                             |
// |   googleflog module                         |
// |   kinduff <abarcadabra@gmail.com>           |
// |                                             |
// |   with love in one coding session in 2013   |
// |   refactored and hipsterized in 2016        |
// |                                             |
// +---------------------------------------------+-----+

/**
 * Picks one random element from array
 * @memberof Array.prototype
 */
Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

/**
 * Merges two objects from source to destination (this).
 * @memberof Array.prototype
 */
Object.prototype.extend = function (source) {
  for (var property in source) {
    if (source.hasOwnProperty(property)) {
      this[property] = source[property];
    }
  }
  return this;
};

/*
 * Googleflog modules
 * @namespace googleflog
 */
var googleflog = {
  /**
   * Translate a message with options.
   * @method translate
   * @memberof googleflog
   *
   * @param {string} inputMessage - The message to be translated.
   * @param {object} options      - Object to set options.
   */
  translate: function (inputMessage, options) {
    var defaultOptions = {
      noHead: false,   // no head on result
      noTail: false,   // no tail on result
      noTrails: false, // just the result
      head: '',        // custom head for result
      tail: ''         // custom tail for result
    }

    // force options with defaults
    if (typeof options == 'object') {
      options = defaultOptions.extend(options);
    } else {
      options = defaultOptions;
    }

    // translates inputMessage
    var result = inputMessage.toLowerCase().replace(/\w/g, function (c) {
      return googleflog.charMap[c] || c;
    });

    // apply options
    result = this.applyOptions(result, options);

    // returns result
    return result;
  },

  /**
   * Alias for `translate` function.
   * @method t
   * @memberof googleflog
   */
  t: function(inputMessage, options) {
    return this.translate(inputMessage, options)
  },

  /**
   * Processes options for result.
   * @method processOptions
   * @memberof googleflog
   *
   * @param {string} message - The message to be used.
   * @param {object} options - Object to set options.
   */
  applyOptions: function (inputMessage, options) {
    var result = inputMessage;

    // noTrails
    if (!options.noTrails) {
      // noHead and head
      if (!options.noHead && options.head == '' ) {
        var head = this.headMap.sample();
        result = head + ' ' + result;
      } else {
        result = options.head + result;
      }
      // noTrail and trail
      if (!options.noTail && options.head == '') {
        var tail = this.tailMap.sample();
        result = result + ' ' + tail; 
      } else {
        result = result + options.tail;
      }
    }

    // return result
    return result;
  },

  // these are the original character, head and
  // tail maps, im adding them as defaults just
  // for sentimental value, you can do whatevs.

  /**
   * Returns googleflog character map. Can be set.
   * @method charMap
   * @memberof googleflog
   */
  charMap: { // ascii waterfall
    "a" : "A",
    "b" : "B",
    "c" : "c",
    "d" : "d",
    "e" : "eE",
    "f" : "f",
    "g" : "G",
    "h" : "H",
    "i" : "ii",
    "j" : "j",
    "k" : "Q",
    "l" : "l",
    "m" : "m",
    "n" : "ñ",
    "ñ" : "Ñ",
    "o" : "0o",
    "p" : "p",
    "q" : "k",
    "r" : "r",
    "s" : "zh",
    "t" : "T",
    "u" : "u",
    "v" : "v",
    "w" : "w",
    "x" : "x",
    "y" : "y",
    "z" : "zh"
  },
  /**
   * Returns the start string array. Can be set.
   * @method headMap
   * @memberof googleflog
   */
  headMap: [
    "**"
  ],

  /**
   * Returns the end string array. Can be set.
   * @method tailMap
   * @memberof googleflog
   */
  tailMap: [
    "**~ xD",
    "*+..",
    "***",
    "-- <3",
    ",.-~ :D"
  ]
};

// amd
if (typeof define !== 'undefined' && define.amd) define(function(){return googleflog;});
//common js
if (typeof exports !== 'undefined') exports.googleflog = googleflog;
// browser
else if (typeof navigator !== 'undefined') window.googleflog = googleflog;
// nodejs
if (typeof module !== 'undefined') module.exports = googleflog;
