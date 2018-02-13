'use strict';

module.exports = exports = {};

exports.add = function(a, b) {
    if (!isNaN(a) || !isNaN(b)) {
        return null;
    } else {
        return a + b;
    }
}

exports.subtract = function(a, b) {
    if (!isNaN(a) || !isNaN(b)) {
        return null;
    } else {
        return a - b;
    }
}

