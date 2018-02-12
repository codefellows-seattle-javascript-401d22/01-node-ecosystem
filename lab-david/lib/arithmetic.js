'use strict';

module.exports = exports = {};

exports.add = function(a,b){
    if(typeof(a) !== 'number' || typeof(b) !== 'number') {
        console.log(null);
        return null;
    }
    console.log(a + b);
    return a + b;
}

exports.sub = function(a,b){
    if(typeof(a) !== 'number' || typeof(b) !== 'number'){
        console.log(null);
        return null;
    }
    console.log(a - b);
    return a - b;
}