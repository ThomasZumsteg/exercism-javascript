var Raindrops = function() {};

Raindrops.prototype.convert = function(number) {
	/* Converts a number to a series of sounds based on factors */
	var factorToSound = { 
		3: "Pling", 
		5: "Plang", 
		7: "Plong",
	};

	function makeSounds(sounds, factor) {
		if(number % factor == 0)
			sounds += factorToSound[factor];
		return sounds;
	}

	var raindrops = Object.keys(factorToSound).sort().reduce(makeSounds, '');
	return raindrops || number.toString() ;
};

module.exports = Raindrops;