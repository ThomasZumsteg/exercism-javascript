/* Finds pythagorean triplets */
var Triplet = function(a,b,c) { this.a = a, this.b = b, this.c = c }

/* Sum of the sides of a triple */
Triplet.prototype.sum = function() { return this.a + this.b + this.c };

/* Product of the sides of a triple */
Triplet.prototype.product = function() { return this.a * this.b * this.c };

Triplet.prototype.isPythagorean = function() {
	/* Tests if the set of number is pythagorean */
	return (this.a*this.a) + (this.b*this.b) == (this.c*this.c);
};

Triplet.where = function(params) {
	/* Finds triplets with certain characterstics */
	var triplets = [];
	for(var a = params.minFactor || 1; a <= params.maxFactor; a++) {
		for(var b = a; b <= params.maxFactor; b++) {
			for(var c = b; c <= params. maxFactor; c++) {
				var t = new Triplet(a,b,c);
				var checkSums = !params.sum || (params.sum == t.sum());
				if(t.isPythagorean() && checkSums )
					triplets.push(t);
			}
		}
	}
	return triplets;
};

module.exports = Triplet;