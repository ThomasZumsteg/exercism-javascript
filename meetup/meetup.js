var weekDays = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");

var Meetup = function(year, month, day, nth) {
	/* Finds a meetup date */
  var intDay = weekDays.indexOf(day)

  switch (nth) {
    case "teenth":
      return find_day(year, month, intDay, 13, 19);
    case "1st":
      return find_day(year, month, intDay, 1, 7);
    case "2nd":
      return find_day(year, month, intDay, 8, 14);
    case "3rd":
      return find_day(year, month, intDay, 15, 21);
    case "4th":
      return find_day(year, month, intDay, 22, 28);
    case "5th":
      return find_day(year, month, intDay, 29, 31);
    case "last":
      return last(year, month, intDay);
  }
}

function find_day(year, month, day, start, stop) {
	/* Finds the first occurance of a day of the week between two dates */
  for(var meetup = new Date(year, month, start); 
    meetup.getDate() <= stop && meetup.getMonth() == month; 
    meetup = meetup.addDays(1)) {

    if( meetup.getDay() == day )
      return meetup;
  }
  throw "Date does not exist";
};

function last(year, month, day) {
	/* Last occurance of a day in a month */
  for(var meetup = new Date(year, month + 1, 0); 
    meetup.getMonth() == month; 
    meetup = meetup.addDays(-1)) {

    if( meetup.getDay() == day )
      return meetup;
  }
  throw "Date does not exist";
};

Date.prototype.addDays = function(days) {
	/* Adds a number of days to a date object */
	var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};

module.exports = Meetup;
