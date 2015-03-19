var Sieve = function(size) {
	/* Finds prime numers */
	
	this.primes = [2];
	var sieve = Array.apply(null, new Array(size+1))
		.map(Boolean.prototype.valueOf, true);

	for(var n = 3; n < sieve.length ; n += 2) {
		if(sieve[n]) {
			this.primes.push(n);
			for( var m = n*n; m < sieve.length; m += n)
				sieve[m] = false;
		}
	}
}

module.exports = Sieve;
