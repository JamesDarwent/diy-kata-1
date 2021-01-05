const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(6)).toEqual("Fizz")
    expect(fizzBuzz(9)).toEqual("Fizz")
    expect(fizzBuzz(-12)).toEqual("Fizz")
    expect(fizzBuzz(333)).toEqual("Fizz")
    });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz")
    expect(fizzBuzz(10)).toEqual("Buzz")
    expect(fizzBuzz(-70)).toEqual("Buzz")
    expect(fizzBuzz(5000)).toEqual("Buzz")
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz")
    expect(fizzBuzz(90)).toEqual("FizzBuzz")
    expect(fizzBuzz(-120)).toEqual("FizzBuzz")
    expect(fizzBuzz(60000)).toEqual("FizzBuzz")
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(7)).toEqual(7)
    expect(fizzBuzz(13)).toEqual(13)
    expect(fizzBuzz(-61)).toEqual(-61)
    expect(fizzBuzz(30001)).toEqual(30001)
  });
});
