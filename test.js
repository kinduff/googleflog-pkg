var assert = require('assert');
var googleflog = require('./googleflog');

// custom configuration
googleflog.headMap = ['head'];
googleflog.tailMap = ['tail'];

// test variables
var defaults = {
  inputString: 'Hello World!'
};
var expectedResults = { 
  de_fault: 'head HeEll0o w0orld! tail',
  empty_options: 'head HeEll0o w0orld! tail',
  head_tail: 'headHeEll0o w0orld!tail',
  noHead: 'HeEll0o w0orld! tail',
  noTail: 'head HeEll0o w0orld!',
  noTrails: 'HeEll0o w0orld!'
};

// tests
describe('googleflog', function () {
  describe('#translate', function () {
    it('default - no options', function () {
      var result = googleflog.translate(defaults.inputString);
      assert.equal(result, expectedResults.de_fault);
    });

    it('empty options', function () {
      var result = googleflog.translate(defaults.inputString, {});
      assert.equal(result, expectedResults.empty_options);
    });

    it('custom head tail', function () {
      var result = googleflog.translate(defaults.inputString, {
        head: 'head',
        tail: 'tail'
      });
      assert.equal(result, expectedResults.head_tail);
    });

    it('noHead true', function () {
      var result = googleflog.translate(defaults.inputString, {
        noHead: true
      });
      assert.equal(result, expectedResults.noHead);
    });

    it('noTail true', function () {
      var result = googleflog.translate(defaults.inputString, {
        noTail: true
      });
      assert.equal(result, expectedResults.noTail);
    });

    it('noTrails true', function () {
      var result = googleflog.translate(defaults.inputString, {
        noTrails: true
      });
      assert.equal(result, expectedResults.noTrails);
    });
  });
});
