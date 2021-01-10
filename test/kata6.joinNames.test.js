const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
  }])).toEqual("Bart, Lisa & Maggie");
 
    expect(joinNames([{
      name: 'Tom'
    }, {
      name: 'Jerry'
  }])).toEqual("Tom & Jerry");

    expect(joinNames([{
      name: 'Luffy'
    }, {
      name: 'Zoro'
    }, {
      name: 'Nami'
    }, {
      name: 'Ussop'
    }, {
      name: 'Sanji'
    }, { 
      name: 'Chopper'
    }, {
      name: 'Robin'
    }, {
      name: 'Franky'
    }, {
      name: 'Brook'
    }, {
      name: 'Jinbe'
  }])).toEqual("Luffy, Zoro, Nami, Ussop, Sanji, Chopper, Robin, Franky, Brook & Jinbe");
  });
});
