'use strict';

module.exports = function(name) {
  if (typeof name !== 'string') throw Error (null);
  return `Hello ${name}`;
};