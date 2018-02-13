'use strict';

module.exports = function(name) {
    if (!name) throw new Error('no name provided');
    if(typeof name !== 'string') return null;
    console.log(`Hello ${name}`);
    return `Hello ${name}`;
}