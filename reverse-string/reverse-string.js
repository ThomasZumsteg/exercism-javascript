module.exports = function(chars) {
    var srahc = '';
    for(var i = chars.length-1; 0 <= i; i--) {
        srahc += chars[i];
    }
    return srahc;
};
