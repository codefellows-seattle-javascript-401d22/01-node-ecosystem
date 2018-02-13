'use strict';

const greet = require('../lib/greet.js');
const math = require('../lib/arthmetic.js');
const assert = require('assert');

describe('Greet Module', function() {
    describe('#helloWorld', function() {
        it('it should return hello world', function() {
            var result = greet('world');
            assert.ok(result === 'hello world', 'not equal to hello world');
        });

        it('should return null if argument type is not string', function() {
            var result = greet();
            assert.ok(result === null, 'not null');
        });
    });
});

describe('Arthmetic Module', function() {
    describe('#add', function() {
        it('it should return 5', function() {
            var result = math.add(2,3);
            assert.ok(result === 5, 'not equal to 5');
        });

        it('it should return null if argument type is not number', function() {
            var result = math.add(2,'three');
            assert.ok(result === null, 'not null');
        });
    });
    describe('#sub', function() {
        it('it should return 2', function() {
            var result = math.sub(5,3);
            assert.ok(result === 2, 'not equal to 2');
        });

        it('it should return null if argument type is not number', function() {
            var result = math.sub('five',2);
            assert.ok(result === null, 'not null');
        });
    });
});

