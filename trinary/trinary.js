var Trinary = function(digits) {
	/* Trinary number class */
	this.digits = digits;
}

Trinary.prototype.toDecimal = function() {
	/* Converts trinary number to decimal */
	var decimal = this.digits
		.split('')
		.reverse()
		.reduce(
			function(total, digit, power) {
				if(digit.match(/[012]/))
					return total + digit * Math.pow(3, power);
			}, 0);
	return decimal || 0;
};

module.exports = Trinary;