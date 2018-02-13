'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('arithmetic module', function() {
  describe('#sum', function() {
    it('should return the sum of two numbers', function() {
      var result = arithmetic.add(1, 3);
      assert.ok(result === 4, 'not equal to 4');
    });
    it('should throw a missing number error', function() {
      assert.throws(function() {
        arithmetic.sum();
      }, 'error not thrown');
    });
  });
  describe('#sub', function() {
    it('should return the difference of two numbers', function() {
      var result = arithmetic.sub(4, 2);
      assert.ok(result === 2, 'not equal to 2');
    });
    it('should throw a missing number error', function() {
      assert.throws(function() {
        arithmetic.sub();
      }, 'error not thrown');
    });
  });
});