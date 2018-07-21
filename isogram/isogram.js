class Isogram {
    constructor(word) {
        this.word = word;
    }

    isIsogram() {
        return !/([^-\s]).*\1/i.test(this.word);
    }
}

module.exports = Isogram;
