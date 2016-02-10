var BigInt = require('./big-integer.js');

module.exports = function () {
	/* Counts the number of grains of rice on squares of a chess board */
	return {
		// Grains start at 1 and double every square
		square: function (n) { return BigInt(2).pow(n - 1).toString() },
		total: function() { return BigInt(2).pow(64).prev().toString() },
	}
}
