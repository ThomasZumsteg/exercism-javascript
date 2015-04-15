function bracket(brackets) {
	/* Checks that bracket syntax is correct */
	var pairs = {"{}": 0, "[]": 0, "()": 0};
	var pairs_match = brackets.split('').every(match_braces, pairs);
	return pairs_match && 
		Object.keys(pairs).every(function(pair) { return pairs[pair] == 0 });
};

function match_braces(element) {
	Object.keys(this).forEach( function(pair) {
		if(pair[0] == element)
			this[pair]++;
		else if(pair[1] == element)
			this[pair]--;
	}, this);
	return Object.keys(this).every(function(pair) { return 0 <= this[pair]}, this);
};

module.exports = bracket;