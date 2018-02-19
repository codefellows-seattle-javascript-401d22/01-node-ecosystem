'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function() {
  describe('#addition', function() {
    it('should return 17', function() {
      var result = arithmetic.add(10, 7);
      assert.ok(result === 17, 'not equal to 17');
    });
    it('should throw null error when not a number', function() {
      assert.throws(function() {
        arithmetic.add();
      }, 'error not thrown');
    });
  });
  describe('#subtraction', function() {
    it('should return 10', function() {
      var result = arithmetic.sub(20, 10);
      assert.ok(result === 10, 'not equal to 10');
    });
    it('should throw null error when not a number', function() {
      assert.throws(function() {
        arithmetic.sub();
      }, 'error not thrown');
    });
  });
});