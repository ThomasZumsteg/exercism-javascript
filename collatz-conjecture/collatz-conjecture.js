class CollatzConjecture {
    steps(num) {
        if(num <= 0) {
            throw new Error('Only positive numbers are allowed');
        }
        for(var i = 0; 1 < num; i++) {
            num = num % 2 == 0 ? num / 2 : num * 3 + 1;
        }
        return i;
    }
}

module.exports = CollatzConjecture;
