'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function() {
  describe('#add', function() {
    it('should return 8', function() {
      var result = arithmetic.add(3, 5);
      assert.ok(result === 8, 'not equal to 8');
    });
    it('should throw null error if either argument is a non-number', function() {
      assert.throws(function() {
        arithmetic.add(2,'2');
      }, 'error not thrown');
    });
  });
  describe('#sub', function() {
    it('should return 3', function() {
      var result = arithmetic.sub(3,6);
      assert.ok(result === 3, 'not equal to 3');
    });
    it('should throw null error if either argument is a non-number', function() {
      assert.throws(function() {
        arithmetic.sub(2,'2');
      }, 'error not thrown');
    });
  });
});