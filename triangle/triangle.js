/* Classifies triangles */
var Triangle = function(a,b,c) { this.triangle = [a,b,c].sort() }

Triangle.prototype.kind = function() {
	/* Determines the type of triangle */

	// Sides from smallest to largest
	var a = this.triangle[0];
	var b = this.triangle[1];
	var c = this.triangle[2];

	// Validation
	if (a < 0) 
		throw "Only positive length sides are allowed";
	if (a * b * c == 0)
		throw "Triangle cannot have zero area";
	if (a + b < c)
		throw "Not a valid triangle";

	// Classification
	if (a === b && b === c)
		return "equilateral";
	if(a === b || b === c)
		return "isosceles";
	return "scalene";
};

module.exports = Triangle;
