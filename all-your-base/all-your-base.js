class Converter {
    convert(digits, from, to) {
        if(from == null || from <= 1 || Math.floor(from) != from) {
            throw new Error('Wrong input base');
        }
        if(to == null || to <= 1 || Math.floor(to) != to) {
            throw new Error('Wrong output base');
        }
        if(digits.length == 0 || (1 < digits.length && digits[0] == 0)) {
            throw new Error('Input has wrong format');
        }

        var total = digits.map(d => parseInt(d)).reduce((total, digit) => {
            if(digit < 0 || from <= digit) {
                throw new Error('Input has wrong format');
            }
            return total * from + digit;
        });

        var result = [];
        while(1 <= total) {
            result.unshift(total % to);
            total = Math.floor(total / to);
        }
        return result.length != 0 ? result : [0];
    }
}

module.exports = Converter;
