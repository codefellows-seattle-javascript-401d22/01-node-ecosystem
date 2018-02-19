'use strict';

module.exports = exports = {};

exports.add = function(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number') throw Error(null);
    return num1 + num2;
}

exports.sub = function(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number') throw Error(null);
    return num1 - num2;
}