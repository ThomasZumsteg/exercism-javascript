function translate(phrase) {
	/* Translates a phrase into piglatin */
	return phrase.split(' ').map(pigize).join(' ');
}

function pigize(word) {
	/* Turns a word into piglatin */
	var matches = word.match(/^([^aeioy]*qu)(.*)$/) ||
		word.match(/^(.*?)([aeiouy].*)$/)
	return matches ? matches[2] + matches[1] + "ay" : word;
};

module.exports = { translate: translate }