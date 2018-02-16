'use strict';

module.exports = exports = {};

exports.add = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    } else {
        return a + b;
    }
}

exports.subtract = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    } else {
        return a - b;
    }
}

