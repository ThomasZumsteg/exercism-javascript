module.exports = function(year) { 
	/* Test if year is leap year */
	return year%4==0 && (year%100!=0 || year%400==0);
}