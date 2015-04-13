function convert(OCR_string) {
	/* Convert a line representation of digits into a string of digits */
	OCR_lines = OCR_string.split("\n");
	OCR_characters = [];
	for(var line = 0; line < OCR_lines.length; line += 4) {
		OCR_characters.push(lines_to_characters(OCR_lines.slice(line, line + 4)));
	}

	return OCR_characters.map(function(row) {
		return row.map(function(character) {
			var digit = OCR_digits.indexOf(character);
			return  digit != -1 ? digit.toString() : "?";
		}).join("");
	}).join(",");
}

function lines_to_characters(line) {
	/* Divides a set of lines into characters */
	var characters = [];
	for(var c = 0; c < (line[0].length) / 3; c += 1) {
		characters.push( line.map(function(row) { 
			return row.slice(c * 3, c * 3 + 3);
		}) );
	}
	return characters.map(function(character) {return character.join("\n")});
}

module.exports = {convert: convert};

var OCR_digits = [
	" _ \n" +
	"| |\n" +
	"|_|\n" +
	"   ",
    "   \n" +
    "  |\n" +
    "  |\n" +
    "   ",
    " _ \n" +
    " _|\n" +
    "|_ \n" +
    "   ",      
    " _ \n" +
    " _|\n" +
    " _|\n" +
    "   ",
    "   \n" +
    "|_|\n" +
    "  |\n" +
    "   ",
    " _ \n" +
    "|_ \n" +
    " _|\n" +
    "   ",
    " _ \n" +
    "|_ \n" +
    "|_|\n" +
    "   ",
    " _ \n" +
    "  |\n" +
    "  |\n" +
    "   ",
    " _ \n" +
    "|_|\n" +
    "|_|\n" +
    "   ",
    " _ \n" +
    "|_|\n" +
    " _|\n" +
    "   ",
];