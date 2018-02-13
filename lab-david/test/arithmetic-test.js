'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function(){
    describe('#add', function() {
        it('Should add 8 to 10 to return 18', function(){
            var result = arithmetic.add(8, 10);
            assert.ok(result === 18, 'Not equal to 18');
        })
        it('Should return null', function(){
            assert.throws(function(){
                arithmetic.add('not a number', 'also not a number')
            }, 'Error not thrown');
        });
    });
    describe('#sub', function(){
        it('Should subtract 4 from 10 to return 6', function(){
            var result = arithmetic.sub(10,4);
            assert.ok(result === 6, 'Not equal to 6');
        });
        it('Should return null', function(){
            assert.throws(function(){
                arithmetic.add('not a number', 'also not a number')
            }, 'Error not thrown');
        });
    });
});