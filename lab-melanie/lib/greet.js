'use strict';

/*
Create a NodeJS module in the lib directory named greet.js. This module should export a single function.

The greet function should have a single parameter (arity of one) that should expect a string as it's input
The greet function should return the input name, concatenated with "hello ": eg. ("hello susan")
The greet function should return null if the input is not a string
*/

module.exports = function(input) {
  if (typeof input !== 'string') throw new Error(null);
  return `Hello ${input}`;
};