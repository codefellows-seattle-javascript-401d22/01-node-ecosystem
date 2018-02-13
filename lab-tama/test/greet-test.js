'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#sayHey', function() {
    it('it should return null if name is not a string', function() {
      var result = greet.sayHey(1);
      assert.ok(result === null);
    });
    it.only('it should return hello world', function() {
      var result = greet.sayHey('world');
      console.log('result', result);
      assert.ok(result === 'hello world', 'not equal to hello world');
    });
    // it ('should throw a missing name error', function() {
    //   assert.throws(function() {
    //     greet.sayHey();
    //   }, 'error not thrown');
    // });
  });
  describe('#sayBye', function() {
    it('should return see ya later', function() {
      var bye = greet.sayBye();
      assert.ok(bye === 'see ya later', 'not equal to see ya later');
    });
  });
});


