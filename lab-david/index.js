'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

greet(2348);
greet('David');
arithmetic.add(10,10);
arithmetic.add('fool', 10);
arithmetic.sub(10, 9);
arithmetic.sub('fool', 9);