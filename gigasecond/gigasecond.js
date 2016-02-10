// milliseconds 
var GIGASECOND = Math.pow(10, 12);

var Gigasecond = function(day) {
	/* Adds a gigasecond (10^9 seconds) to a date */
	this.day = day;
};

// The date a gigasecond later
Gigasecond.prototype.date = function() { 
  return new Date(this.day.getTime() + GIGASECOND);
};

module.exports = Gigasecond;
