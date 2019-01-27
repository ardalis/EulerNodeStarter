# EulerNodeStarter

A starting point for solving Project Euler problems using node.js.

## Give a Star! :star:

If you like this project, please give it a star. Thanks!

# Getting Started

You can either download/clone this repo, or probably better is to fork it to your own account. Then follow the instructions below.

[Install node / npm](https://nodejs.org/en/download/). If you don't already have it...

From the root of this repo's folder run the following commands. You only need the install step the first time you run it:

```
npm install
npm test
node index.js -p 1
```

This should run the first solution in the solutions folder which is provided. You will need to calculate the correct answer. You'll find the description of the first problem [here](https://projecteuler.net/problem=1). After registering, you can submit your answer to see if it's correct:

![image](https://user-images.githubusercontent.com/782127/51804316-4780b200-222d-11e9-97df-6dcba080128d.png)

## npm test

You don't have to write tests but if you do they should go in the `spec/solutions` folder. An example is provided for the first problem. Currently it is failing because it's expecting -1 and the unimplemented Problem1 is returning 0, so you should see "Expected 0 to equal -1." You need to change the -1 to be the actual correct answer, and your code should return that answer at which point the test will pass.

To find the problems and verify your solutions go to ProjectEuler.net:

- [Problem List](https://projecteuler.net/archives)
- [Register](https://projecteuler.net/register) so you can track your progress

## Solutions (WARNING: SPOILERS)

My own implementation of these problems is in my [EulerNode](https://github.com/ardalis/EulerNode) repository. You should only look there if you get totally stuck on something yourself, though.
