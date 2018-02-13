'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  it('it should return null', function() {
    var result = greet(5);
    assert.ok(result === null, 'not equal to null');
  });

  it('it should return hello world', function() {
    var result = greet('world');
    assert.ok(result === 'hello world', 'not equal to hello world');
  });

  it('should throw a missing name error', function() {
    assert.throws(function() {
      greet();
    }, 'error not thrown');
  });
  
});
