const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map((letter, i) =>
    new Array(26).fill(' ').map((_, e) => i == e ? letter : ' ')
);

class Diamond {
    makeDiamond(letter) {
        const lineLen = letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        const upperDiamond = Letters
            .slice(0, lineLen)
            .map(line => line.slice(0,lineLen).reverse().join('')
                         + line.slice(1,lineLen).join(''));
        return upperDiamond.concat(upperDiamond.slice(0, -1).reverse())
                           .join('\n') + '\n';
    }
}

module.exports = Diamond;
