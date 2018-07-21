function encode(str) {
    if(str == '')
        return str;
    var count = 1;
    var prev = str[0];
    var result = '';
    for(var i = 1; i <= str.length; i++) {
        if(prev != str[i]) {
            result += (count <= 1 ? "" : count.toString()) + prev;
            prev = str[i];
            count = 1;
        } else {
            count += 1;
        }
    }
    return result;
}

function decode(str) {
    var result = '';
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if('0' <= str[i] && str[i] <= '9') {
            count = parseInt(str[i]) + 10 * count;
        } else {
            result += str[i].repeat(count == 0 ? 1 : count);
            count = 0;
        }
    }
    return result;
}

module.exports =  {encode: encode, decode: decode};
