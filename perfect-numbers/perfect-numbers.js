function factors(number) {
    var result = number == 1 ? [] : [1];
    for(var f = 2; f*f <= number; f++) {
        if(number % f == 0) {
            result.push(f);
            if(f * f != number) {
                result.push(number / f);
            }
        }
    }
    return result;
}

class PerfectNumbers {
    classify(number) {
        if(number <= 0) {
            return "Classification is only possible for natural numbers.";
        }

        var factorSum = factors(number).reduce((a, b) => a + b, 0);
        if(number < factorSum) {
            return "abundant";
        } else if(number > factorSum) {
            return "deficient";
        } else {
            return "perfect";
        }
    }
}

module.exports = PerfectNumbers;
