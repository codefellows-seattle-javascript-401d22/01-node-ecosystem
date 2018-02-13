'use strict';

const greet = require('../lib/greet.js')
const assert = require('assert');

describe('Greet Module', function(){
    it('Should say Hello David', function(){
        var result = greet('David');
        assert.ok(result === 'Hello David', 'Doesn\'t say Hello David');
    });
    it('Should return null', function(){
        assert.throws(function(){
            greet();
        }, 'Not an error');
    })
})