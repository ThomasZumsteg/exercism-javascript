var Matrix = function(matrix) {
	/* Two dimentional matrix class */
	this.rows = matrix.split("\n").map(function(row) { 
		return row.replace(/^\s+|\s+&/g,'').split(' ')
			.map(function(e) { return parseInt(e)});
	});

	this.columns = Array.apply(null, new Array(this.rows[0].length))
		.map(function(_, col) {
			return this.map(function(row) { return row[col] });
		}, this.rows
	);
	this.saddlePoints = saddlePoints(this);
}

function saddlePoints(matrix) {
	/* Finds saddle points in a matrix */
	var row_max = matrix.rows.map(function(row){ return Math.max.apply(null, row)});
	var column_min = matrix.columns.map(function(column){ return Math.min.apply(null, column)});
	var saddlePoints = [];
	matrix.rows.forEach(function(row, r) {
		row.forEach(function(element, c) {
			if(element == row_max[r] && element == column_min[c])
				saddlePoints.push([r,c]);
		})
	});
	return saddlePoints;
};

module.exports = Matrix;