class Isogram {
    constructor(word) {
        this.word = word;
    }

    isIsogram() {
        var letters = new Set();
        var regex = /[^\s-]/; // Needs a better way to identify unicode letters
        for(var chr of this.word.toLowerCase()) {
            if(regex.test(chr) && letters.has(chr)) {
                return false;
            }
            letters.add(chr);
        }
        return true;
    }
}

module.exports = Isogram;
