'use strict';

const arithmatic = require('../lib/arithmatic.js');
const assert = require('assert');

describe('Arithmatic Module', function() {
  describe('#add', function(){
    it('it should return the sum of two numbers', function() {
      var result = arithmatic.add(5,8);
      assert.equal(result === 13, 'not equal to 13');
    });

    it('should throw a non-number error', function(){
      assert.throws(function() {
        mathematics.add();
      }, 'error not thrown');
    });
  });



// The add method should have a 2 parameters(airty of two)
// if either argument is a non - number the function should return null
// else return the sum of the 2 numbers