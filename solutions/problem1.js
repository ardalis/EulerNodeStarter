'use strict';

function Problem1() {}
Problem1.prototype.solve = function() {
    return sumMultiples(1000);
};

module.exports = Problem1;

var sumMultiples = function(max) {
    var sum = 0;
    // TODO: find the sum of all multiples of 3 and 5 less than max
    return sum;
}

exports.solve = function() {
    return sumMultiples(1000);
}