'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function(){
  describe('#addTest', function(){
    it('it should return a sum', function(){
      var result = arithmetic.addTest('1, 2');
      assert.ok(result === '3', 'this aint a number');
    });
    describe('#subtractTest', function(){
      it('it should return second num subtracted from first', function(){
        var result = arithmetic.subtractTest('4, 2');
        assert.ok(result === '2', 'this aint a number');
      });
    });
  });
})