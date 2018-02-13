'use strict';

module.exports = exports = {};

exports.add = function(a,b) {
  if(!a || !b) throw new Error('parameter not provided');
  if(typeof a !== 'number' || typeof b !== 'number') return null;
  return a+b;
};

exports.sub = function(a,b) {
  if(!a || !b) throw new Error('parameter not provided');
  if(typeof a !== 'number' || typeof b !== 'number') return null;
  return a-b;
};