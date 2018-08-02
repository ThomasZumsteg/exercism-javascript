function solve(puzzle) {
    var sides = puzzle.split(' == ');
    var equal = sides[1];
    var terms = sides[0].split(' + ');
    const letters = Array.from(terms.reduce(
            (acc, term) => new Set([...acc, ...term.split('')]),
            new Set(equal.split(''))));

    var solution = null;
     

    return solution;
}

module.exports = solve;
