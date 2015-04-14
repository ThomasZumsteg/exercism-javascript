var Meetup = function(month, year) {
	/* Finds a meetup date */
	this.month = month;
	this.year = year;

	'sunteenth monteenth tuesteenth wednesteenth thursteenth friteenth saturteenth'.split(" ")
		.forEach( function(func, day) { this[func] = find_day(day, 13, 19) }, this);

	'firstSunday firstMonday firstTuesday firstWednesday firstThursday firstFriday firstSaturday'.split(' ')
		.forEach( function(func, day) { this[func] = find_day(day, 1, 7) }, this);

	'secondSunday secondMonday secondTuesday secondWednesday secondThursday secondFriday secondSaturday'.split(' ')
		.forEach( function(func, day) { this[func] = find_day(day, 8, 14) }, this);

	'thirdSunday thirdMonday thirdTuesday thirdWednesday thirdThursday thirdFriday thirdSaturday'.split(' ')
		.forEach( function(func, day) { this[func] = find_day(day, 15, 21) }, this);

	'fourthSunday fourthMonday fourthTuesday fourthWednesday fourthThursday fourthFriday fourthSaturday'.split(' ')
		.forEach( function(func, day) { this[func] = find_day(day, 22, 28) }, this);

	'fourthSunday fourthMonday fourthTuesday fourthWednesday fourthThursday fourthFriday fourthSaturday'.split(' ')
		.forEach( function(func, day) { this[func] = find_day(day, 22, 28) }, this);

	'lastSunday lastMonday lastTuesday lastWednesday lastThursday lastFriday lastSaturday'.split(' ')
		.forEach( function(func, day) { this[func] = last(day) }, this);
}

function find_day(day, start, stop) {
	/* Finds the first occurance of a day of the week between two dates */
	return function() {
		for(var meetup = new Date(this.year, this.month, start); 
			meetup.getDate() <= stop && meetup.getMonth() == this.month; 
			meetup = meetup.addDays(1)) {

			if( meetup.getDay() == day )
				return meetup;
		}
	};
};

function last(day) {
	/* Last occurance of a day in a month */
	return function() {
		for(var meetup = new Date(this.year, this.month + 1, 0); 
			meetup.getMonth() == this.month; 
			meetup = meetup.addDays(-1)) {

			if( meetup.getDay() == day )
				return meetup;
		}
	};
};

Date.prototype.addDays = function(days) {
	/* Adds a number of days to a date object */
	var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};

module.exports = Meetup;