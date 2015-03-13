function primeFactors(remainder) {
	/* Finds all prime factors of a number */
	// Finds factors smallest to largest adding to the list of factors
	var factor = 2;
	var factors = [];
	while(Math.pow(factor, 2) <= remainder) {
		while(remainder % factor == 0) {
			factors.push(factor);
			remainder /= factor;
		}
		// factor += 1;
		factor += factor == 2 ? 1 : 2;
	}
	if(remainder != 1)
		factors.push(remainder);
	return factors;
}

module.exports = {for: primeFactors};
