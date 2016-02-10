var Hamming = function() {};

Hamming.prototype.compute = function( dnaA, dnaB ) {
  var sum = 0;
  if (dnaA.length !== dnaB.length) { throw 'DNA strands must be of equal length.'}
  for( var i = 0; i <= dnaA.length; i++) {
    if (dnaA.charAt(i) !== dnaB.charAt(i)) {sum++}
  }
  return sum;
}

module.exports = Hamming;
