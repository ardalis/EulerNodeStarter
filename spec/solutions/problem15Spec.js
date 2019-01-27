describe("problem15", function() {
    var Problem15 = require('../../solutions/problem15');
    var problem15;

    beforeEach(function() {
        problem15 = new Problem15();
    });

    it("should return correct answer from solve", function() {
        let result = problem15.solve();

        expect(result).toEqual(137846528820);
    });

    it("should return 6 from solveFor2x2", function() {
        let result = problem15.solveForN(2);

        expect(result).toEqual(6);
    });

    it("should return 2 from solveFor1x1", function() {
        let result = problem15.solveForN(1);

        expect(result).toEqual(2);
    });

    it("should return 20 from solveFor3x3", function() {
        let result = problem15.solveForN(3);

        expect(result).toEqual(20);
    });
});