var primes = [2, 3, 5, 7, 11, 13];

function find_nth_prime(n) {
	/* Finds the nth prime number */
	if(n <= 0)
		throw new Error("Prime is not possible");

	for(var num = 15; primes.length < n; num += 2) {
		var is_prime = true;
		for(var p = 0; is_prime && Math.pow(primes[p], 2) <= num; p++) {
			if(num % primes[p] == 0)
				is_prime = false;
		}
		if(is_prime)
			primes.push(num);
	}
	return primes[n-1];
};

module.exports = {nth: find_nth_prime};