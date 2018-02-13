'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#greet', function() {
    it('it should return hello world', function() {
      var result = greet.greet('world');
      assert.ok(result === 'hello world','not equal to world');
    });
    it('should throw a null error', function() {
      assert.throws(function() {
        greet.greet();
      }, 'error not thrown');
    });
  });
});