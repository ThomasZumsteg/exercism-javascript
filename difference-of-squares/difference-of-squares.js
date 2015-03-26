var Squares = function(num) {
	/* Calculates sums of difference functions */
	// Based on triangle numbers and square pyramid numbers
	this.squareOfSums = (Math.pow(num, 2) * Math.pow(num + 1, 2)) / 4;
	this.sumOfSquares = num * (num + 1) * (2 * num + 1) / 6;
	this.difference = this.squareOfSums - this.sumOfSquares;
}

module.exports = Squares;