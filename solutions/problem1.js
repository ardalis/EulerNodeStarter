'use strict';

function Solution() {
    var sumMultiples = function(max) {
        var sum = 0;
        // TODO: Find sum of multiples of 3 and 5.
        return sum;
    }

    Solution.prototype.solveForMax = function(max) {
        return sumMultiples(max);
    };

    // called by index.js for this problem
    Solution.prototype.solve = function() {
        return sumMultiples(1000);
    };
}

module.exports = Solution;