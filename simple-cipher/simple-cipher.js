var Cipher = function(key) {
	/* Simple Caesarian shift Cipher */
	if( key !== undefined && !key.match(/^[a-z]+$/) )
		throw Error("Bad key");
	this.key = key || "aaaaaaaaaa";
}

var a_ascii = 'a'.charCodeAt(0);
var z_ascii = 'z'.charCodeAt(0);

Cipher.prototype.encode = function(plainText) {
	/* Encode a message */
	return plainText.split('')
		.map(function(letter, index) {
				var c = letter.charCodeAt(0) + this.key[index % this.key.length].charCodeAt(0); 
				c -= 2 * a_ascii
				c %= z_ascii - a_ascii + 1;
				c += a_ascii;
				return String.fromCharCode(c);
			}, this)
		.join('');
};

Cipher.prototype.decode = function(cipherText) {
	/* Decode a message */
	return cipherText.split('')
		.map(function(letter, index) {
				var c = letter.charCodeAt(0) - this.key[index % this.key.length].charCodeAt(0); 
				c %= z_ascii - a_ascii + 1;
				c += a_ascii;
				return String.fromCharCode(c);
			}, this)
		.join('');
};

module.exports = Cipher;