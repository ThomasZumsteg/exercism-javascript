var BeerSong = function() {}


BeerSong.prototype.verse = function( verseNum ) {
	/* Sings a verse of "bottles of beer on the wall" */
	// Special cases for verses that include 0 (no more) and 1 (bottle[s])
	var specialLines = {
		0: "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n",
		1: "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n",
		2: "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n",
	};
	// A normal verse
	var normalLine = "%d bottles of beer on the wall, %d bottles of beer.\nTake one down and pass it around, %d bottles of beer on the wall.\n";
	var sprintf = require('util').format;
	return verseNum in specialLines ? specialLines[verseNum] : sprintf(normalLine, verseNum, verseNum, verseNum - 1);
};

BeerSong.prototype.sing = function( start, stop) {
	/* Sings a set of verses of "Bottle of beer on the wall" */
	// Default
	stop || (stop = 0);
	var song = [];
	for(var verseNum = start; verseNum >= stop; verseNum--) {
		song.push(this.verse(verseNum));
	}
	return song.join("\n");
};


module.exports = BeerSong;
