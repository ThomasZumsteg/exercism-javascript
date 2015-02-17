var Bob = function() {};

Bob.prototype.hey = function(input) {
	/* A teenager */
	// Shouting (all upper case)
	if ( input.toUpperCase() === input && /[A-Z]/.test(input))
		return "Whoa, chill out!";
	// Question (ends with a question mark)
	if ( /\?\s*$/.test(input) )
		return "Sure.";
	// Nothing (al white space)
	if ( /^\s*$/.test(input))
		return "Fine. Be that way!";
	// Default
	return "Whatever.";
};

module.exports = Bob;
