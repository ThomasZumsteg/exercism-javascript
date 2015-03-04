// days = days/hour * hours/second * seconds 
var GIGASECOND =  (1/24) * (1 / 3600) * Math.pow(10, 9);

var Gigasecond = function(day) {
	/* Adds a gigasecond (10^9 seconds) to a date */
	this.later = new Date(day);
	this.later.setDate(this.later.getDate() + GIGASECOND );
};

// The date a gigasecond later
Gigasecond.prototype.date = function() { return this.later };

module.exports = Gigasecond;