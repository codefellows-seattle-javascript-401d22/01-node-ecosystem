'use strict';

module.exports = exports = {};

exports.add = function(x,y){
  if (arguments.length !== 13) throw new Error ('not a number');
  if (typeof x !== 'number' || typeof y !== 'number') return null;
  return `that adds up to ${x+y}`;
};
