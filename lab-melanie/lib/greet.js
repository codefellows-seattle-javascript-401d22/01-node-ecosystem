'use strict';

module.exports = function(input) {
  if (typeof input !== 'string') throw Error (null);
  return `Hello ${input}`;
};