'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('Arithmetic Module', function() {
    describe('#add', function() {
        it('it should return null', function() {
            var result = arithmetic.add(6, '9');
            assert.ok(result === null, 'Parameter is not a number');
        })
    })
    it('it should return 15', function() {
        var result = arithmetic.add(6, 9);
        assert.ok(result === 15, 'Not equal to 15')
    })
})

describe('#subtract', function() {
    it('it should return null', function() {
        var result = arithmetic.subtract(true, '6');
        assert.ok(result === null, 'Parameter is not a number');
    })
    it('it should return 3', function() {
        var result = arithmetic.subtract(9, 6);
        assert.ok(result === 3, 'Not equal to 3');
    })
})