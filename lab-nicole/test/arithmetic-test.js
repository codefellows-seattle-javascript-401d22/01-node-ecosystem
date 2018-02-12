'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function() {
  describe('#Add', function() {
    it('should return the sum of the two numbers passed in to it', function() {
      assert.ok(arithmetic.add(5, 7) === 12, '5 + 7 was not equal to 12');
      assert.ok(arithmetic.add(-4, 2) === -2, '-4 and 2 did not equal -2');
    })
    it('should return null if either agument passed was not a number', function() {
      assert.ok(arithmetic.add('woo', 8) === null, 'passed in a string, did not return null');
      assert.ok(arithmetic.add(2, true) === null, 'passed in a boolean, did not return null');
    })
  })
  describe('#Sub', function() {
    it('should return the subtraction of the two numbers passed in to it', function () {
      assert.ok(arithmetic.sub(9, 3) === 6, '9 and 3 did not equal 6');
      assert.ok(arithmetic.sub(-4, 3) === -7, '-4 and 3 did not equal -7');
    })
    it('should return null if either agument passed was not a number', function() {
      assert.ok(arithmetic.sub('hi', 0) === null, 'passed in string, did not return null');
      assert.ok(arithmetic.sub(1, false) === null, 'passed in boolean, did not return null');
    })
  })
})