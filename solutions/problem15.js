'use strict';

function Problem15() {
    function factorial(num) {
        if (num === 0) { return 1; } else { return num * factorial(num - 1); }
    }

    Problem15.prototype.solveForN = function(dimension) {
        return (factorial(2 * dimension) / (factorial(dimension) * factorial(dimension)));

        // need dimension rights and downs in any combination
        // if dimension =1 options are DR or RD
        // if d=2, options are RRDD,RDRD, DDRR, DRDR, RDDR, DRDR
        // if d=3, RRRDDD...DDDRRR

        // possible alg is  (2n)!/(n!*n!)
        // 2/(2*2) -> 2
        // 4!/2*2 => 3! => 6
        // 6! / 36 => 20
    };

    // called by index.js for this problem
    Problem15.prototype.solve = function() {
        return this.solveForN(20);
    };
}

module.exports = Problem15;