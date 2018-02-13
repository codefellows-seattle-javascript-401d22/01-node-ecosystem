'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function() {
  describe('#add', function() {
    it('should throw a missing a parameter error', function() {
      assert.throws(function() {
        arithmetic.add(7);
      }, 'error not thrown');
    });

    it('should throw a missing a parameter error', function() {
      assert.throws(function() {
        arithmetic.add();
      }, 'error not thrown');
    });

    it('it should return null', function() {
      var result = arithmetic.add(5, '5');
      assert.ok(result === null, 'not equal to null');
    });

    it('it should return 10', function() {
      var result = arithmetic.add(5, 5);
      assert.ok(result === 10, 'not equal to 10');
    });

  });

  describe('#sub', function() {
    it('should throw a missing parameter error', function() {
      assert.throws(function() {
        arithmetic.sub(5);
      }, 'error not thrown');
    });

    it('should throw a missing parameter error', function() {
      assert.throws(function() {
        arithmetic.sub();
      }, 'error not thrown');
    });

    it('it should return null', function() {
      var result = arithmetic.sub(5, '5');
      assert.ok(result === null, 'not equal to null');
    });

    it('it should return 10', function() {
      var result = arithmetic.sub(15, 5);
      assert.ok(result === 10, 'not equal to 10');
    });

  });

});