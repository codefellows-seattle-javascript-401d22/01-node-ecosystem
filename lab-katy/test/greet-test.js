'use strict';

const greet =  require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function(){
    describe('#sayHello', function(){
        it('it should return hello world', function(){
            //create assertion tests here
            var result = greet.sayHello('world');
            assert.ok(result === 'hello world', 'null');
        });

        // it('should throw a null error for non string values', function(){
        //     assert.throws(function(){
        //         greet.sayHello();
        //     }, 'error not thrown');
        // });
    });
})