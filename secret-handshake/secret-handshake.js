var SecretHandshake = function(code) {
	/* Creates a secret handshake based on the Mary Poppins code */
	if(code.toString().match(/[^0-9]/))
		throw new Error("Handshake must be a number");
	this.code = code;
	this.handshakeSteps = [ function(shake) { shake.push("wink")},
						    function(shake) { shake.push("double blink")},
						    function(shake) { shake.push("close your eyes")},
						    function(shake) { shake.push("jump")},
						    function(shake) { shake.reverse()}
						  ];
}

SecretHandshake.prototype.commands = function() {
	/* Encodes the handshake */
	return this.handshakeSteps.reduce(function(handshake, func, i) {
		if(this.code & 1 << i)
			func(handshake);
		return handshake;
	}.bind(this), []);
};

module.exports = SecretHandshake;