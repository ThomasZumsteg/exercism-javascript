var gcd = function(i, j) {
    var a = Math.max(Math.abs(i), Math.abs(j));
    var b = Math.min(Math.abs(i), Math.abs(j));
    var tmp;
    while(b != 0) {
        tmp = b;
        b = a % tmp;
        a = tmp;
    }
    return a;
}

class Rational {
    constructor(num, denom) {
        var divisor = gcd(num, denom);
        this.num = num / divisor;
        this.denom = denom / divisor;
    }

    add(rational) {
        return new Rational(
            this.num * rational.denom + this.denom * rational.num,
            this.denom * rational.denom);
    }

    sub(rational) {
        return new Rational(
            this.num * rational.denom - this.denom * rational.num,
            this.denom * rational.denom);
    }

    mul(rational) {
        return new Rational( this.num * rational.num, this.denom * rational.denom);
    }
}

module.exports =  Rational;
