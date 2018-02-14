'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function(){
  describe('#addTest', function(){
    it('should return a sum', function(){
      var result = arithmetic.addTest(1, 2);
      assert.ok(result === 3, 'this aint a number');
    });
    it('should return null', function(){
      var result = arithmetic.addTest('cat');
      assert.ok(result === null)
    });
    describe('#subtractTest', function(){
      it('should return second num subtracted from first', function(){
        var result = arithmetic.subtractTest(4, 2);
        assert.ok(result === 2, 'this aint a number');
      });
      it('should return null', function(){
        var result = arithmetic.subtractTest('dog');
        assert.ok(result === null);
      });
    });
  });
})