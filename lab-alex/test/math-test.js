'use strict';

const arithmatic = require('../lib/arithmatic.js');
const assert = require('assert');

describe('Arithmatic Module', function() {
  describe('#add', function() {
    it('it should add the numbers', function() {
      var result = arithmatic.add(1,2);
      assert.ok(result === 3, 'not correct');
    });
    it('should throw a null error', function() {
      assert.throws(function() {
        arithmatic.add('x','$');

      }, 'error not thrown');
    });
  });

  describe('#sub', function() {
    it('should subtract the numbers', function() {
      var result = arithmatic.sub(10, 3);
      assert.ok(result === 7, 'not correct');
    });
    it('should throw a null error', function() {
      assert.throws(function() {
        arithmatic.sub('x', '$');
      }, 'error not thrown');
    });

  });
});