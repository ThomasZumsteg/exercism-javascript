var Year = function(year) {
  this.year = year;
}

Year.prototype.isLeap = function() { 
	/* Test if year is leap year */
	return this.year%4==0 && (this.year%100!=0 || this.year%400==0);
}

module.exports = Year;
