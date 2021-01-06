const { TestScheduler } = require("jest");
const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    test("returns array of human, cat and dog years when passed human years", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(20)).toEqual([20, 96, 114]);
        expect(humanCatDogYears(46)).toEqual([46, 200, 244]);
    });
});


// Formulas for calculating cat and dog years 

// Cat Years
// 15 cat years for first human year
// +9 cat years for second human year
// +4 cat years for each human year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each human year after that