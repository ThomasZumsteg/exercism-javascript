var dna = function(sequence) {
	/* Analyzes DNA sequences */
	var sprintf = require('util').format;
	dna.sequence = sequence || '';
	dna.nucleotides = "GTAC".split('');

	// Validates DNA sequence
	var vaildDNA = new RegExp(sprintf("^[%s]+$", dna.nucleotides.join('')));
	if (sequence && !sequence.match(vaildDNA))
		throw new Error("Not a valid DNA sequence");
	return {
		count: count,
		histogram: histogram,
	};
};

function count(letter) {
	/* Counts the occurences of a single dna sequence */
	var matches = dna.sequence.match(new RegExp(letter, "g")) || [];
	return matches.length;
};

function histogram() {
	/* Counts the occurences of all dna sequences */
	var counts = {};
	dna.nucleotides.forEach(function(e) {counts[e] = count(e)});
	return counts;
};

module.exports = dna;
