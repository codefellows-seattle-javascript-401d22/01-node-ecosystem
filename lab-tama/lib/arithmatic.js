'use strict';

module.exports = exports = {};

exports.add = function(x, y) {
  if (arguments.length !== 2) throw new Error ('not a number');
  if (typeof x !== 'number' || typeof y !== 'number') return null;
  return x + y;
};

exports.subtract = function (x, y) {
  if (arguments.length !== 2) throw new Error('not a number');
  if (typeof x !== 'number' || typeof y !== 'number') return null;
  return x - y;
};
