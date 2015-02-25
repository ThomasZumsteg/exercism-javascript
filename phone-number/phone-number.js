var PhoneNumber = function(phoneNumber) { 
	/* Formats phone numbers */
	// Start, optional 1, area code, first set of digits, second set of digits
	// Can have any non digits in between 
	var reNumber = new RegExp(["^", "1?", "(\\d{3})", "(\\d{3})", "(\\d{4})", "$"].join("\\D*"));
	var match = phoneNumber.match(reNumber); 
	if(match) {
		this.area = match[1];
		this.first = match[2];
		this.second = match[3];
		this.num = match[1] + match[2] + match[3];
	}
	else {
		// Should probably throw an error here
		this.num = Array(11).join('0');
	}
}

var sprintf = require('util').format;
PhoneNumber.prototype.number   = function() { return this.num }
PhoneNumber.prototype.areaCode = function() { return this.area }
PhoneNumber.prototype.toString = function() { return sprintf("(%s) %s-%s", this.area, this.first, this.second) }

module.exports = PhoneNumber;