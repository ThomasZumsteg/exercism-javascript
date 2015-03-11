function primeFactors(remainer) {
	/* Finds all prime factors of a number */
	// Finds factors smallest to largest adding to the list of factors
	var factor = 2;
	var factors = [];
	while(Math.pow(factor, 2) <= remainer) {
		while(remainer % factor == 0) {
			factors.push(factor);
			remainer /= factor;
		}
		factor += 1;
	}
	if(remainer != 1)
		factors.push(remainer);
	return factors;
}

module.exports = {for: primeFactors};