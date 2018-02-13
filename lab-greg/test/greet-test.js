'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#sayHello', function() {
    it('should return hello world', function() {
      var result = greet.sayHello('world');
      assert.ok(result === 'hello world', 'not equal to hello world');
    });
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet.sayHello();
      }, 'error not thrown');
    });
  });
});


  