'use strict';

module.exports = function (name) {
  if (arguments.length !== 1) throw new Error('did not receive just one argument');
  if (typeof name !== 'string') return null;
  return `hello ${name}`;
}