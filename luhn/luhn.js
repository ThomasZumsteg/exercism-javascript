var Luhn = function(code) {
	/* Validates and does Luhn code operations */
	this.code = code;
	this.checkDigit = this.code % 10;
	this.addends = this._addends();
	this.checksum = this._checksum();
	this.valid = (this.checksum % 10 == 0);
}

Luhn.create = function(code) {
	/* Creates a valid Luhn code */
	code *= 10;
	var luhn = new Luhn(code);
	return code + (10 - luhn.checksum % 10) % 10;
};

Luhn.prototype._addends = function() {
	/* Doubles odd digits from the right
	Subtracts 9 if they are 10 or bigger */
 	return this.code
	.toString()
	.split('')
	.reverse()
	.map(function(e) {return parseInt(e)})
	.map(function(digit, index) {
		if(index % 2 == 0)
			return digit
		else if( digit < 5 )
			return 2 * digit;
		else
			return 2 * digit - 9;
	})
	.reverse();
};

Luhn.prototype._checksum = function() {
	/* Digit sum of a Luhn encoded number */
	return this
	._addends()
	.reduce(function(total, item) {
		return total + item;
	}, 0);
}

module.exports = Luhn;