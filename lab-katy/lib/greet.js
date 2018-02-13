'use strict';

module.exports = exports = {};

exports.sayHello = function(world){
    if(typeof world != 'string') throw new Error('this aint a string');
    return `hello ${world}`;
}