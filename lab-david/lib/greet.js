'use strict';

module.exports = function(name){
    if(typeof(name) !== 'string') {
        console.log(null);
        return null;
    }
    console.log(`Hello ${name}`);
    return `Hello ${name}`;
}