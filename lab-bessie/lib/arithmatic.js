'use strict';

module.exports = exports = {};

exports.add = function(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return a + b;
};

exports.sub = function(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return b - a;
};