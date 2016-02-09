var Queens = function(args) {
	/* Queens on a chess board */
	this.white = (args && args.white) || [0, 3];
	this.black = (args && args.black) || [7, 3];
	if(this.white === this.black)
		throw "Queens cannot share the same space";
}

Queens.prototype.toString = function() {
	/* String representation of the chess board */
	return Array.apply(null, Array(8)).map(function(_, i) {
		return Array.apply(null, Array(8)).map(function(_, j) {
			if(this.white[0] == i && this.white[1] == j)
				return "W";
			if(this.black[0] == i && this.black[1] == j)
				return "B";
			return "_";
		}, this).join(" ") + "\n";
	}, this).join("");
};

Queens.prototype.canAttack = function() {
	/* Can the queens attack eachother */
	var diffs = this.black.map(function(e, i) {
		return Math.abs(e - this.white[i])
	}, this);
	return (Math.min.apply(null, diffs) == 0 || diffs[0] == diffs[1]);
};

module.exports = Queens;
