var ones = ",one,two,three,four,five,six,seven,eight,nine".split(',');
var teens = ",eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen".split(',');
var tens = ",,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninty".split(',');
var powers = ", thousand, million, billion".split(',');

function inEnglish(num) {
	/* A number in english */
	if(0 > num || num >= 1000000000000)
		throw new Error('Number must be between 0 and 999,999,999,999.');

	if(num == 0)
		return "zero";

	var digit_groups = [];
	while(0 < num) {
		digit_groups.push(num % 1000);
		num = Math.floor(num / 1000);
	}
	
	return digit_groups.reduce(function(english, group, power) {
		if(group == 0)
			return english;
		return englishPower(group) + powers[power] + (english?" ":'') + english;
	}, '');
}

function englishPower(digits) {
	/* Say numbers between 0 and 1000 in english (exclusive) */
	digits = ("00" + digits).slice(-3).split('').map(function(e) {return parseInt(e)});
	var english = "";

	// hundereds
	if(digits[0] != 0)
		english += ones[digits[0]] + " hundred";
	
	// tens, teens are specual cases
	if(digits[1] == 1)
		return english + (english?' ':'') + teens[digits[2]];
	else if(digits[1] != 0)
		english += (english?' ':'') + tens[digits[1]];

	// ones
	if(digits[2] != 0)
		english += (english?digits[1]?'-':' ':'') + ones[digits[2]];

	return english;
}

module.exports = {inEnglish: inEnglish}
