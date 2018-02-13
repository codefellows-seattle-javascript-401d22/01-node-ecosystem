'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#greet', function() {
    it('should say hello world', function() {
      var result = greet('world');
      assert.ok(result === 'hello world', 'not equal to hello world');
    });
    it('should say null', function(){
      var result = greet(88);
      assert.ok(result === null, 'result not null');
    });
  });
});