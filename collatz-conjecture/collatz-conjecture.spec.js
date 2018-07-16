var CollatzConjecture = require('./collatz-conjecture');

describe('CollatzConjecture', function () {
  var collatz = new CollatzConjecture();

  it('test zero steps for one', function () {
    var expected = 0;
    expect(collatz.steps(1)).toEqual(expected);
  });

  it('test divide if even steps', function () {
    var expected = 4;
    expect(collatz.steps(16)).toEqual(expected);
  });

  it('test even and odd steps', function () {
    var expected = 9;
    expect(collatz.steps(12)).toEqual(expected);
  });

  it('test large number of even and odd steps', function () {
    var expected = 152;
    expect(collatz.steps(1000000)).toEqual(expected);
  });

  it('test zero is an error', function () {
    expect(function () {
      collatz.steps(0);
    }).toThrow(new Error('Only positive numbers are allowed'));
  });

  it('test negative value is an error', function () {
    expect(function () {
      collatz.steps(-1);
    }).toThrow(new Error('Only positive numbers are allowed'));
  });
});
