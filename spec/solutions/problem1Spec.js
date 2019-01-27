describe("problem1", function() {
    var Problem1 = require('../../solutions/problem1');
    var problem1;

    beforeEach(function() {
        problem1 = new Problem1();
    });

    it("should return correct answer from solve", function() {
        let result = problem1.solve();

        expect(result).toEqual(0); // TODO: Change this to correct answer
    });
});