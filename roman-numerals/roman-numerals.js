/* Decimal to Roman numeral mapping */
var decToNum = {   1: "I",   4:"IV",   5: "V",   9:"IX",
				  10: "X",  40:"XL",  50: "L",  90:"XC",
				 100: "C", 400:"CD", 500: "D", 900:"CM",
				1000: "M",
				};

function toRoman(remainer) {
	/* Convert a decimal number to a roman numeral */
	
	function appendNumerals(total, decimal) {
		/* Appends as many roman numerals as possible */
		while (remainer >= decimal) {
			remainer -= decimal;
			total += decToNum[decimal];
		}
		return total;
	};

	var decimalNumbers = Object.keys(decToNum).sort(reverseNumeric);
	return decimalNumbers.reduce( appendNumerals, '');
};

function reverseNumeric(a, b){
	/* Reverse sort a numeric array */
	return b - a;
};

module.exports = toRoman;