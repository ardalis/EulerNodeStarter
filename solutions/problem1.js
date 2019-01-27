'use strict';

function Problem1() {
    var sumMultiples = function(max) {
        var sum = 0;
        // TODO: Find sum of multiples of 3 and 5.
        return sum;
    }

    Problem1.prototype.solveForMax = function(max) {
        return sumMultiples(max);
    };

    // called by index.js for this problem
    Problem1.prototype.solve = function() {
        return sumMultiples(1000);
    };
}

module.exports = Problem1;