'use strict';

module.exports = exports = {};

exports.add = function(a, b) {
  if (arguments.length !== 2) throw new Error('there were not two arguments passed in');
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a + b;
}


exports.sub = function(a, b) {
  if (arguments.length !== 2) throw new Error('there was not two arguments passed in');
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a - b;
}