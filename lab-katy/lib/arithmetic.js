'use strict';

module.exports = exports = {};

exports.addTest = function(a,b){
  if(typeof a !== 'number' || typeof b !== 'number') return (null);
  return a + b;
};

exports.subtractTest = function(a,b){
  if(typeof a != 'number' || typeof b != 'number') return (null);
  return a - b;
};




