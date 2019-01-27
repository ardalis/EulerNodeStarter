'use strict';

function Problem1() {
    var sumMultiples = function(max) {
        var sum = 0;
        // TODO: Find sum of multiples of 3 and 5.
        return sum;
    }

    Problem1.prototype.solve = function(max) {
        return sumMultiples(max);
    };
}

module.exports = Problem1;

exports.solve = function() {
    let problem1 = new Problem1();
    return problem1.solve(1000);
}