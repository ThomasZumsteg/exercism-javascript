/* A robot to that follows simple instructions */
var Robot = function() {}

// Directions the robot can face and associated vectors
var directions = [ 'north', 'east', 'south', 'west' ];
var vectors = [[0, 1], [1, 0], [0, -1], [-1, 0]];

Robot.prototype.orient = function(direction) {
	/* Sets the direction of the robot */
	if(directions.indexOf(direction) == -1)
		throw "Invalid Robot Bearing";
	this.bearing = direction;
};

Robot.prototype.turnRight = function() {
	/* Changes the bearing one step to the right */
	var i = directions.indexOf(this.bearing);
	this.bearing = directions[(i + 1) % directions.length];
};

Robot.prototype.turnLeft = function() {
	/* Changes the bearing one step to the left */
	var i = directions.indexOf(this.bearing);
	this.bearing = directions[(i + directions.length - 1) % directions.length];
};

/* Sets the robots position */
Robot.prototype.at = function(x, y) { this.coordinates = [x,y] };

Robot.prototype.advance = function() {
	/* Move the position one step in the direction the robot is facing */
	var dir = directions.indexOf(this.bearing);
	this.coordinates.forEach(function(e, i) { 
		this[i] += vectors[dir][i];
	}, this.coordinates);
};

// Instructions the robot understands
var instructions = {
	'L': 'turnLeft',
	'R': 'turnRight',
	'A': 'advance',
};

Robot.prototype.instructions = function(instruction_list) {
	/* Make a list of instructions from a string */
	return instruction_list.split('').map(function(instruction) {
		return instructions[instruction];
	});
};

Robot.prototype.place = function(args) {
	/* Initilized the direction and location of a robot */
	this.orient(args['direction']);
	this.at(args['x'], args['y']);
};

Robot.prototype.evaluate = function(instruction_list) {
	/* Robot preforms a series of instructions */
	this.instructions(instruction_list).forEach(function(action) {
		this[action]();
	}, this);
};

module.exports = Robot;