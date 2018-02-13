'use strict';

module.exports = exports = {};

exports.add = function(numOne, numTwo) {
  var sum;
  
  if(!numOne || !numTwo) throw new Error('Numbers not Provided')
  sum = (numOne + numTwo);
  if(typeof numOne !== 'number' || typeof numTwo !== 'number') return null;
  
  console.log(sum);
  return sum; 

};

exports.sub = function(numOne, numTwo) {
  var diff;
  if(!numOne || !numTwo) throw new Error('Numbers not Provided')
  diff = (numOne - numTwo);
  if(typeof numOne !== 'number' || typeof numTwo !== 'number') return null;
    
  console.log(diff);
  return diff; 

};