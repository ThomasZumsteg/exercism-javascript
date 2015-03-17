var Crypto = function(plainText) {
	/* Encrypts  message using the crypto-square algorithm */
	this.palinText = plainText;
}

Crypto.prototype.normalizePlaintext = function() {
	/* Removes all characters except letters and numbers */
	return this.palinText
		.toLowerCase()
		.split('')
		.filter(function(e) { return e.match(/[a-z0-9]/) })
		.join('');
};

Crypto.prototype.size = function() {
	/* Size of the square */
	return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
};

Crypto.prototype.plaintextSegments = function() {
	/* Splits clear text into groups array*/
	var text = this.normalizePlaintext();
	return text.match(new RegExp(".{1," + this.size() + "}", "g"));
};

Crypto.prototype.ciphertext = function() {
	/* Encrypts the text by selecting from column then row */
	var text_blocks = this.plaintextSegments();
	var cipher_text = '';
	for(var i = 0; i < this.size(); i++)
		for(var j in text_blocks)
			cipher_text += text_blocks[j].charAt(i);
	return cipher_text;
};

Crypto.prototype.normalizeCiphertext = function() {
	/* Splits cipher text into groups */
	return this.ciphertext()
		.match(new RegExp(".{1," + this.size() + "}", "g"))
		.join(' ');
};

module.exports = Crypto;
