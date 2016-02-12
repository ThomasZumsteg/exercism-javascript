var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
	/* Tranlates dna to RNA */
	var dnaToRna = makeHash("GCTA".split(''), "CGAU".split(''));
	return dna.split('').map(function(e) { return dnaToRna[e] } ).join('');
}

function makeHash(keys, values) {
	/* Makes a hash table from key and value arrays */
	var hash = {};
	keys.forEach(function(key, index) { hash[key] = values[index] });
	return hash;
}

module.exports = DnaTranscriber;
