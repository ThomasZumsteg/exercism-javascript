module.exports = function () {
	/* Counts the number of grains of rice on squares of a chess board */
	return {
		// Grains start at 1 and double every square
		// ONLY RETURNS ESTIMATES, javascript doesn't natively support large numbers
		square: function (n) { return Math.pow(2, n - 1) },
		total: function() { return Math.pow(2, 64) - 1 },
	}
}