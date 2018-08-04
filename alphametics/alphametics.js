function* select(n, items) {
    /* Select all permutations of length n from items */
    var index = new Array(n).fill(0).map((_, i) => i);
    while(true) {
        yield items;
        break;
    }
}

function make_map(digits, letters) {
    var map = {};
    for(var i = 0; i < digits.length; i++) {
        map[letters[i]] = digits[i];
    }
    return map;
}

function translate(word, map) {
    /* Translate the word to a number using a mapping
     * e.g. APE with map {A: 1, P: 2, E: 3} => 123 */
    return word.split('').reduce((total, letter) => total * 10 + map[letter], 0);
}

function get_letters(...words) {
    /* Ordered collection of letters in all words */
    return Array.from(words.reduce(
        (result, word) => new Set([...result, ...word.split('')]), new Set()));
}

function solve(puzzle) {
    const sides = puzzle.split(' == ');
    const sum = sides[1];
    const terms = sides[0].split(' + ');
    const letters = get_letters(sum, ...terms);
    const digits = new Array(10).fill(0).map((_, i) => i);
    var solution;
    for(let indexes in select(letters.length, digits)) {
        var map = make_map(indexes, letters);
        if(terms.reduce((acc, word) => acc + translate(word, map))
            == translate(sum, map)) {
            if(solution == null) {
                solution = map;
            }
        }
    }
    return solution;
}

module.exports = solve;
