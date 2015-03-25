var Series = function(digits) {
	/* Mannipulates a series of digits */
	this.digits = digits.split('')
		.map(function(e) { return parseInt(e) } );
}

Series.prototype.slices = function(sliceSize) {
	/* Slices digits into arrays of a certain size */
	var num_slices = this.digits.length - sliceSize + 1
	if(num_slices <= 0)
		throw new Error("Slice size is too big.");
	return Array.apply(null, new Array(num_slices))
		.map(function(_, i) {
			return this.slice(i, i + sliceSize);
		}, this.digits);
};

module.exports = Series;