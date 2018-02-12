'use strict';

module.exports = exports = {};

exports.add = function(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') throw new Error(null);
  return x + y;
};

exports.sub = function(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') throw new Error(null);
  return y - x;
};