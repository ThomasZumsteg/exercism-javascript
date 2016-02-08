var Words = function() {}

Words.prototype.count = function( wordString ) {
	/* Counts the number of times each words appears */
	var wordCount = {};
	// Splits words on whitespace
	wordString.trim().split(/\s+/).forEach( function(word) {
		if(word in wordCount && !isNaN(wordCount[word]))
			wordCount[word]++;
		else
			// Initilize new word
			wordCount[word] = 1;
	});
	return wordCount;
};

module.exports = Words;
