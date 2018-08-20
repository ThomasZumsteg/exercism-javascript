var rectangles = require('./rectangles');

describe('Rectangles', function () {
  it('no rows', function () {
    expect(rectangles([])).toBe(0);
  });

  it('no columns', function () {
    expect(rectangles([''])).toBe(0);
  });

  it('no rectangles', function () {
    expect(rectangles([' '])).toBe(0);
  });

  it('one rectangle', function () {
    var input = [
      '+-+',
      '| |',
      '+-+'];
    expect(rectangles(input)).toBe(1);
  });

  it('two rectangles without shared parts', function () {
    var input = [
      '  +-+',
      '  | |',
      '+-+-+',
      '| |  ',
      '+-+  '];
    expect(rectangles(input)).toBe(2);
  });

  it('five rectangles with shared parts', function () {
    var input = [
      '  +-+',
      '  | |',
      '+-+-+',
      '| | |',
      '+-+-+'];
    expect(rectangles(input)).toBe(5);
  });

  it('rectangle of height 1 is counted', function () {
    var input = [
      '+--+',
      '+--+'];
    expect(rectangles(input)).toBe(1);
  });

  it('rectangle of width 1 is counted', function () {
    var input = [
      '++',
      '||',
      '++'];
    expect(rectangles(input)).toBe(1);
  });

  it('1x1 square is counted', function () {
    var input = [
      '++',
      '++'];
    expect(rectangles(input)).toBe(1);
  });

  it('only complete rectangles are counted', function () {
    var input = [
      '  +-+',
      '    |',
      '+-+-+',
      '| | -',
      '+-+-+'];
    expect(rectangles(input)).toBe(1);
  });

  it('rectangles can be of different sizes', function () {
    var input = [
      '+------+----+',
      '|      |    |',
      '+---+--+    |',
      '|   |       |',
      '+---+-------+'];
    expect(rectangles(input)).toBe(3);
  });

  it('corner is required for a rectangle to be complete', function () {
    var input = [
      '+------+----+',
      '|      |    |',
      '+------+    |',
      '|   |       |',
      '+---+-------+'];
    expect(rectangles(input)).toBe(2);
  });

  it('large input with many rectangles', function () {
    var input = [
      '+---+--+----+',
      '|   +--+----+',
      '+---+--+    |',
      '|   +--+----+',
      '+---+--+--+-+',
      '+---+--+--+-+',
      '+------+  | |',
      '          +-+'];
    expect(rectangles(input)).toBe(60);
  });
});
