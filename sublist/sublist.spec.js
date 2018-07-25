var List = require('./sublist');


describe('sublist', function () {
  it('two empty lists are equal', function () {
    var listOne = new List();
    var listTwo = new List();

    expect(listOne.compare(listTwo)).toEqual('EQUAL');
  });

  it('an empty list is a sublist of a non-empty list', function () {
    var listOne = new List();
    var listTwo = new List([1, 2, 3]);

    expect(listOne.compare(listTwo)).toEqual('SUBLIST');
  });

  it('non empty list contains empty list', function () {
    var listOne = new List([1, 2, 3]);
    var listTwo = new List();

    expect(listOne.compare(listTwo)).toEqual('SUPERLIST');
  });

  it('a non-empty list equals itself', function () {
    var listOne = new List([1, 2, 3]);
    var listTwo = new List([1, 2, 3]);

    expect(listOne.compare(listTwo)).toEqual('EQUAL');
  });

  it('two different lists are unequal', function () {
    var listOne = new List([1, 2, 3]);
    var listTwo = new List([2, 3, 4]);

    expect(listOne.compare(listTwo)).toEqual('UNEQUAL');
  });

  it('false start', function () {
    var listOne = new List([1, 2, 5]);
    var listTwo = new List([0, 1, 2, 3, 1, 2, 5, 6]);

    expect(listOne.compare(listTwo)).toEqual('SUBLIST');
  });

  it('consecutive', function () {
    var listOne = new List([1, 1, 2]);
    var listTwo = new List([0, 1, 1, 1, 2, 1, 2]);

    expect(listOne.compare(listTwo)).toEqual('SUBLIST');
  });

  it('sublist at start', function () {
    var listOne = new List([0, 1, 2]);
    var listTwo = new List([0, 1, 2, 3, 4, 5]);

    expect(listOne.compare(listTwo)).toEqual('SUBLIST');
  });

  it('sublist in middle', function () {
    var listOne = new List([2, 3, 4]);
    var listTwo = new List([0, 1, 2, 3, 4, 5]);

    expect(listOne.compare(listTwo)).toEqual('SUBLIST');
  });

  it('sublist at end', function () {
    var listOne = new List([3, 4, 5]);
    var listTwo = new List([0, 1, 2, 3, 4, 5]);

    expect(listOne.compare(listTwo)).toEqual('SUBLIST');
  });

  it('at start of superlist', function () {
    var listOne = new List([0, 1, 2, 3, 4, 5]);
    var listTwo = new List([0, 1, 2]);

    expect(listOne.compare(listTwo)).toEqual('SUPERLIST');
  });

  it('in middle of superlist', function () {
    var listOne = new List([0, 1, 2, 3, 4, 5]);
    var listTwo = new List([2, 3]);

    expect(listOne.compare(listTwo)).toEqual('SUPERLIST');
  });

  it('at end of superlist', function () {
    var listOne = new List([0, 1, 2, 3, 4, 5]);
    var listTwo = new List([3, 4, 5]);

    expect(listOne.compare(listTwo)).toEqual('SUPERLIST');
  });

  it('first list missing element from second list', function () {
    var listOne = new List([1, 3]);
    var listTwo = new List([1, 2, 3]);

    expect(listOne.compare(listTwo)).toEqual('UNEQUAL');
  });

  it('second list missing element from first list', function () {
    var listOne = new List([1, 2, 3]);
    var listTwo = new List([1, 3]);

    expect(listOne.compare(listTwo)).toEqual('UNEQUAL');
  });

  it('order matters to a list', function () {
    var listOne = new List([1, 2, 3]);
    var listTwo = new List([3, 2, 1]);

    expect(listOne.compare(listTwo)).toEqual('UNEQUAL');
  });

  it('same digits but different numbers', function () {
    var listOne = new List([1, 0, 1]);
    var listTwo = new List([10, 1]);

    expect(listOne.compare(listTwo)).toEqual('UNEQUAL');
  });
});
