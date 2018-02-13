'use strict';

const arithmatic = require('../lib/arithmatic.js');
const assert = require('assert');

describe('Arithmatic Module', function() {
  describe('#add', function() {
    it('should equal 15',function() {
      var result = arithmatic.add(7,8);
      assert.ok(result === 15, 'does not equal 15');
    });
    it('should return null', function() {
      var result = arithmatic.add(8, 'hello');
      assert.ok(result === null, 'then they should both be numbers');
    });
  });

  describe('#sub', function() {
    it('should equal 2', function() {
      var result = arithmatic.sub(13, 15);
      assert.ok(result === 2, 'does not equal 2');
    });
    it('should return null', function() {
      var result = arithmatic.sub(15, 'hello');
      assert.ok(result === null, 'then they should both be numbers');
    });
  });
});