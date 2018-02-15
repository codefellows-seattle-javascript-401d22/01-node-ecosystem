'use strict';

const arithmatic = require('../lib/arithmatic.js');
const assert = require('assert');

describe('Arithmatic Module', function() {
  describe('#add', function(){
    it('it should return the sum of two numbers', function() {
      var result = arithmatic.add(5,8);
      assert.ok(result === 13, 'not equal to 13');
    });

    it('should throw a non-number error', function(){
      assert.throws(function() {
        arithmatic.add();
      }, 'error not thrown');
    });
  });
});

