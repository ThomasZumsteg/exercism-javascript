
/* Octal number class */
var Octal = function(oct) { this.oct = oct }

Octal.prototype.toDecimal = function() {
	/* Converts octal to decimal */
	if(this.oct.match(/[^0-7]/)) 
		return 0;
	return this.oct
		.split('')
		.reverse()
		.reduce(function(total, elem, i) {
			return total + elem * Math.pow(8, i); 
		}, 0);
};

module.exports = Octal;