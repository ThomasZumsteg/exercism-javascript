module.exports = {
	keep: keep,
	discard: discard,
}

function keep(items, func) {
	/* Selects items for which a function is True */
	var kept = [];
	for(var i = 0; i < items.length; i++)
		if( func( items[i] ) )
			kept.push( items[i] );
	return kept;
}

function discard(items, func) {
	/* Selects items for which a function is False */
	var not_func = function(item) { return !func(item) };
	return keep(items, not_func);
}