'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

console.log('greet module', greet);
greet('nicole');
console.log('arithmetic module', arithmetic);
console.log(arithmetic.add(9, 3));
console.log(arithmetic.sub(3, 1));