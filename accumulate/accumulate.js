function accumulate(items, func) {
	/* Applies a function to every item in a list */
	var modified = [];
	for(var i = 0; i < items.length; i++)
		modified.push( func(items[i]) );
	return modified;
}

module.exports = accumulate;