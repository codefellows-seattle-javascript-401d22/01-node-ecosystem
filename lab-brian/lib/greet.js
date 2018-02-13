'use strict';

module.exports = function(name) {
  if(arguments.length !== 1) throw new Error('name not provided');
  if(typeof name !== 'string') return null;

  return `hello ${name}`;
};