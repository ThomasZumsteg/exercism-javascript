var RLE = require('./run-length-encoding');

describe('Run-length encoding', function () {
  it('encode empty string', function () {
    expect(RLE.encode('')).toEqual('');
  });

  it('encode single characters only', function () {
    expect(RLE.encode('XYZ')).toEqual('XYZ');
  });

  it('decode empty string', function () {
    expect(RLE.decode('')).toEqual('');
  });

  it('decode single characters only', function () {
    expect(RLE.decode('XYZ')).toEqual('XYZ');
  });

  it('encode simple', function () {
    expect(RLE.encode('AABBBCCCC')).toEqual('2A3B4C');
  });

  it('decode simple', function () {
    expect(RLE.decode('2A3B4C')).toEqual('AABBBCCCC');
  });

  it('encode with single values', function () {
    expect(RLE.encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB')).toEqual('12WB12W3B24WB');
  });

  it('decode with single values', function () {
    expect(RLE.decode('12WB12W3B24WB')).toEqual('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB');
  });

  it('decode(encode(...))combination', function () {
    expect(RLE.decode(RLE.encode('zzz ZZ  zZ'))).toEqual('zzz ZZ  zZ');
  });
});
