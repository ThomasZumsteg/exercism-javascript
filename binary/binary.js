var Binary = function(binString) { this.binString = binString };

Binary.prototype.toDecimal = function() {
	/* Converts a binary string to decimal */
	
	// Validate string
	if ( this.binString.match(/[^10]/) )
		return 0;

	return this.binString.split('').reverse().reduce(
		function(total, bit, power) {
			return total + bit * Math.pow(2, power);
		}, 0
	);
};

module.exports = Binary;