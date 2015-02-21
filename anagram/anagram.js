var anagram = function( word ) { return new Anagram(word); };

/* Class for finding anagrams */
function Anagram(word) { this.word = word.toLowerCase(); };

Anagram.prototype.matches = function( wordList) {
	/* Finds all anagrams of the word */
	if(! (wordList  instanceof Array)) {
		// If the arguments aren't in list form
		var myArgs = arguments;
		wordList = Object.keys(myArgs).map(function(key) {return myArgs[key] } );
	}
	var makeLetters = function(word) { return word.toLowerCase().split('').sort().join('') };
	var letters = makeLetters(this.word), anagram = this.word;
	var anagrams = function(word) { return makeLetters(word) === letters && word.toLowerCase() !== anagram };
	return wordList.filter( anagrams );
};

module.exports = anagram;