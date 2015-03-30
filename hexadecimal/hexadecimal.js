var Hexadecimal = function(hex_digits) {
	/* Hexadeciaml number class */
	this.hex_digits = hex_digits;
}

Hexadecimal.prototype.toDecimal = function() {
	/* Converts hexadecimal to decimal */
	return this.hex_digits
		.split('')
		.reverse()
		.map(hex_digit_value)
		.reduce(function(total, digit, power) {
			return total + digit * Math.pow(16, power);
		}, 0) || 0;
};

function hex_digit_value(digit) {
	/* Converts a hexadecimal digit to integer or NaN*/
	if(digit.match(/[0-9]/))
		return parseInt(digit)
	else if(digit.match(/[a-f]/))
		return digit.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
	else
		return NaN
}

module.exports = Hexadecimal;
