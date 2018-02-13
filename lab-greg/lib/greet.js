'use strict';

module.exports = exports = {};

exports.sayHello = function(name) {
  if(!name) 
    throw new Error('name not provided');
  if(typeof name !== 'string') return null;
  
  return `hello ${name}`;

};