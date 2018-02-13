'use strict';

module.exports = function(name){
    if(typeof(name) !== 'string') throw new Error ('You didn\'t enter a string');
    console.log(`Hello ${name}`);
    return `Hello ${name}`;
}