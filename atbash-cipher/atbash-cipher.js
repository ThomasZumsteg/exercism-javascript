a_ascii = 'a'.charCodeAt(0);
z_ascii = 'z'.charCodeAt(0);

function encode(clear_text) {
	return clear_text.split('')
					 .reduce(shift_char, '')
					 .match(/.{1,5}/g)
					 .join(' ');
}

var shift_char = function(text, char) {
	var ascii = char.toLowerCase().charCodeAt(0);
	if(char.match(/[a-zA-Z]/))
		text += String.fromCharCode(z_ascii - (ascii - a_ascii));
	else if(char.match(/[0-9]/))
		text += char;
	return text;
}

module.exports.encode = encode;
