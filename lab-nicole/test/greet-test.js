'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#Greet', function() {
    it('should have one argument', function() {
      assert.ok(greet.length === 1, 'number of arguments not equal to 1');
    });
    it('should return hello world', function() {
      assert.ok(greet('world') === 'hello world', 'not equal to hello world');
    });
    it('should return null if input is not a string', function() {
      assert.ok(greet(7) === null, 'passing function a number does not return null');
    });
  });
  
})