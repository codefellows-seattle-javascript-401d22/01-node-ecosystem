'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#Greet', function() {
    it('should have one argument', function() {
      assert.ok(greet.length === 1, 'number of arguments not equal to 1');
    });
    it('should return hello nicole', function() {
      assert.ok(greet('nicole') === 'hello nicole', 'not equal to hello nicole');
    });
    it('should return null if input is not a string', function() {
      assert.ok(typeof greet.arguments === string, null)
    });
  });
})