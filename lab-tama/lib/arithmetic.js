'use strict';

module.exports = exports = {};

exports.add = function(number){
  if (!number) throw new Error ('not a number');
  return `hey ${number}`;
};
