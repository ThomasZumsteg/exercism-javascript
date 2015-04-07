var Triangle = function(nRows) {
	/* Builds Pascals Triangle */
	this.rows = [];
	var row = [1];
	for(var i = 0; i < nRows; i++ ) {
		this.rows.push(row);
		this.lastRow = row;
		row = next_row(row);
	}
}

function next_row(current_row) {
	/* Builds the next row of Pascals Triangle */
	var row = []; 
	var prev = 0;
	for(var j = 0; j < current_row.length; j++) {
		row.push(current_row[j] + prev);
		prev = current_row[j];
	}
	row.push(prev);
	return row;
}

module.exports = Triangle;