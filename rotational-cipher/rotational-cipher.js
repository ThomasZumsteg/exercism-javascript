var shift = function(chr, diff) {
    return String.fromCharCode(chr.charCodeAt(0) + diff);
}

class RotationalCipher {
    rotate(text, diff) {
        var encoded = '';
        for(var c = 0; c < text.length; c++) {
            var rot = 0;
            if("a" <= text[c] && text[c] <= "z") {
                rot = (shift(text[c], diff) <= "z") ? diff : (diff - 26);
            } else if("A" <= text[c] && text[c] <= "Z") {
                rot = (shift(text[c], diff) <= "Z") ? diff : (diff - 26);
            }
            encoded += shift(text[c], rot);
        }
        return encoded;
    }
}

module.exports = RotationalCipher;
