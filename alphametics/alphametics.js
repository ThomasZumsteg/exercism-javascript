function* combinations(len, items) {
    var indexes = new Array(len).fill(0);
    var i;
    while(true) {
        if(indexes.length == new Set(indexes).size) {
            yield indexes;
        }
        indexes[0]++;
        for(var i = 0; i < indexes.length; i++) {
            if(items.length < indexes[i] + 1) {
                if(i + 1 < indexes.length) {
                    indexes[i] = 0;
                    indexes[i+1]++;
                } else {
                    return;
                }
            }
        }
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
    const sum = puzzle.split(' == ')[1];
    const terms = puzzle.split(' == ')[0].split(' + ');
    const letters = get_letters(sum, ...terms);
    const digits = new Array(10).fill(0).map((_, i) => i);
    const first = Array.from(
        new Set([sum.split('')[0], ...terms.map(word => word.split('')[0])]));
    var solution = [];
    var map, equal, first_zero;
    for(let combination of combinations(letters.length, digits)) {
        map = make_map(combination, letters);
        equal = terms.reduce(
            (acc, word) => translate(word, map) + acc, 0) == translate(sum, map);
        first_zero = first.reduce((acc, l) => acc || (map[l] == 0), false);
        if(equal && !first_zero) {
            solution.push(map);
        }
    }
    return solution.length == 1 ? solution[0] : null;
}

module.exports = solve;
