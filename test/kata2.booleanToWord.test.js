const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("Returns Yes when true passed in", () => {
    expect(booleanToWord(true)).toEqual("Yes")
  })
  test("Returns No when false passed in", () => {
    expect(booleanToWord(false)).toEqual("No")
  })
});
