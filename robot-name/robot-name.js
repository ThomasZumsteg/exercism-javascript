var Robot = function() { this.name = getName() }

Robot.prototype.reset = function() {
	/* Give the robot a new name */
	var oldName = this.name;
	this.name = getName();
};

// Keeps track of robot names in use
var namesInUse = new Set();

function getName() {
	/* Generates a robot name */
	// Functions for different parts of the name
	var rand = function(max, min) { return Math.floor(Math.random() * (max - min + 1) + min)};
	var letter = function() { return rand('Z'.charCodeAt(0), 'A'.charCodeAt(0)) };
	var digit = function() { return rand('9'.charCodeAt(0), '0'.charCodeAt(0)) };
	// Gets name that is not in use
	// Potential for infinite loop if there are lots (676000) of robots
	do {
		var name = String.fromCharCode(letter(), letter(), digit(), digit(), digit());
	} while( namesInUse.has(name) );

	namesInUse.add(name);
	return name;
}

module.exports = Robot;
