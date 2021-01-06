const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours");
    expect(reachDestination(80, 33)).toEqual("I should be there in 2.5 hours");
    expect(reachDestination(277, 53)).toEqual("I should be there in 5 hours");
    expect(reachDestination(542, 97)).toEqual("I should be there in 5.5 hours");
  });
});


// Formula for estimated time of arrival

// Distance / speed, round up to the nearest 0.5


