'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#function', function() {
    it('should return Hello Ahmed', function() {
      var result = greet('Ahmed');
      assert.ok(result === 'Hello Ahmed', 'not equal to Hello Ahmed');
    });
    it('should return null if name not a string', function() {
      assert.throws(function() {
        greet.name(); 
      }, 'error not thrown');
    });
  });
});