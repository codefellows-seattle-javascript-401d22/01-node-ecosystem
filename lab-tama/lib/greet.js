'use strict';

module.exports = exports = {};

exports.sayHey = function(name) {
  if(name === typeof 'string') return `hello ${name}`;
//   return null;
//   if (name !== typeof 'string') return null;
//   if (!name) throw new Error('name not provided');
//   return `hey ${name}`;
};

exports.sayBye = function() {
  return 'see ya later';
};