'use strict';

/*
Create a NodeJS module in the lib directory named arithmetic.js. This module exports an object and should have add and sub methods that implement addition and subtraction.

The add method should have a 2 parameters (airty of two)
if either argument is a non-number the function should return null
else return the sum of the 2 numbers
The sub method should have 2 parameters (airty of two)
if either argument is a non-number the function should return null
else return the second parameter subtracted from the first parameter
*/

module.exports = exports = {};

exports.add = function(x, y) {
  if (typeof name !== 'number') throw new Error(null);
  console.log(x + y);
  return x + y;
}

exports.sub = function(x, y) {
  if (typeof name !== 'number') throw new Error(null);
  console.log(x - y);
  return x - y;
}