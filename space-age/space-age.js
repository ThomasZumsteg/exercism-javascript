// Your age on another planet
function SpaceAge(seconds) { this.seconds = seconds }

function onAny(ratio) {
	/* Generates a function that calculates an age in plnet years */
	var earthYear = 31557600; // seconds
	return function() {
		/* The age of an individual on a planet */
		var age = this.seconds / (earthYear * ratio);
		return parseFloat(age.toFixed(2));
	}
}

// Your age on a planet
SpaceAge.prototype.onMercury = onAny(0.2408467);
SpaceAge.prototype.onVenus = onAny(0.61519726);
SpaceAge.prototype.onEarth = onAny(1.0);
SpaceAge.prototype.onMars = onAny(1.8808158);
SpaceAge.prototype.onJupiter = onAny(11.862615);
SpaceAge.prototype.onSaturn = onAny(29.447498);
SpaceAge.prototype.onUranus = onAny(84.016846);
SpaceAge.prototype.onNeptune = onAny(164.79132);

module.exports = SpaceAge;