'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
    it('it should return null', function() {
        var result = greet(12345)
        assert.ok(result === null, 'this is not null.')
    })
    it('it should return hello world', function() {
        var result = greet('world');
        assert.ok(result === 'hello world', 'did not say hello to the world :(')
    })
    it('it should throw an error', function() {
        assert.throws(function() {
            greet();
        }, 'error not thrown');
    })
})
