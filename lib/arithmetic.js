'use strict';

module.exports = exports = {};

exports.add = function(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return null;
    } else {
        console.log(a + b);
        return a + b;
    }
}

exports.subtract = function(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return null;
    } else {
        console.log(a - b);
        return a - b;
    }
}
exports.add(2, 5);
exports.add('asd', true);

exports.subtract(5, 2);
exports.subtract('asd', false);
