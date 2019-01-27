'use strict';

console.log('Starting Project Euler solver...');
console.log('Usage: node index.js -p N');
console.log('  where N is the Project Euler problem you are solving.');

var ArgumentParser = require('argparse').ArgumentParser;
var parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true
});
parser.addArgument(['-p', '--problem'], {
    help: 'foo bar'
});
var args = parser.parseArgs();

// console.log(args);

if (args['problem']) {
    var script = "problem" + args['problem'];
    console.log('running script ' + script);
    var solution = require('./solutions/' + script);
    var result = solution.solve();
    console.log('Solution: ' + result);
}