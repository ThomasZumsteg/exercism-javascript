var ETL = function() {}

ETL.prototype.transform = function(oldSturct) {
	/* Converts an old data structure to a new format */
	var newStruct = {};
	// Iterates over keys
	Object.keys(oldSturct).forEach( function(key) {
		// Iterates over values
		oldSturct[key].forEach(function(val) {
			// Assign value to old key
			newStruct[val.toLowerCase()] = parseInt(key);
		});
	});
	return newStruct;
}

module.exports = ETL
