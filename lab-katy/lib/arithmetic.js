'use strict';

module.exports = exports = {};

exports.addTest = function(a,b){
  if(typeof a != 'number' || typeof b != 'number') throw new Error('null');
  return `sum: ${a + b}`;
};

exports.subtractTest = function(a,b){
  if(typeof a != 'number' || typeof b != 'number') throw new Error('null');
  return `difference: ${a - b}`;
};

