Pangram = function(text) {
    this.text = text
}

Pangram.prototype.isPangram = function() {
    var letters = this.text.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split('').every(function(letter){
        return letters.includes(letter)
    });
}

module.exports = Pangram
