'use strict';

module.exports = exports = {};

exports.greet = function(name) {
  if(!name) throw new Error('null');
  return `hello ${name}`;
};