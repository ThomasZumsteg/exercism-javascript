var bracket = require('./bracket-push');

describe("bracket push", function() {
  it("checks for appropriate bracketing in a set of brackets", function() {
    expect(bracket("{}")).toEqual(true);
  });

  it("returns false for unclosed brackets", function() {
    expect(bracket("{{")).toEqual(false);
  });

  it("checks bracketing in more than one pair of brackets", function() {
    expect(bracket("{}[]")).toEqual(true);
  });

  it("checks bracketing in nested brackets", function() {
    expect(bracket("{[]}")).toEqual(true);
  });

  it("checks bracket closure with deeper nesting", function() {
    expect(bracket("{[)][]}")).toEqual(false);
  });

  it("checks bracket closure in a long string of brackets", function() {
    expect(bracket("{[]([()])}")).toEqual(true);
  });
});
