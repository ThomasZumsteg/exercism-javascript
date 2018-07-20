var gcd = function(num, denom) {
    var a = Math.max(Math.abs(num), Math.abs(denom));
    var b = Math.min(Math.abs(num), Math.abs(denom));
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
        if(num < 0)
            divisor *= -1;
        this.num = num / divisor;
        this.denom = (num == 0 && denom < 0 ? -1 : 1) * denom / divisor;
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

    div(rational) {
        return new Rational(this.num * rational.denom, this.denom * rational.num);
    }

    abs() {
        return new Rational(Math.abs(this.num), Math.abs(this.denom));
    }

    exprational(exp) {
        return new Rational(Math.pow(this.num, exp), Math.pow(this.denom, exp));
    }

    expreal(base) {
        return Math.pow(base, this.num / this.denom);
    }

    reduce() {
        return this;
    }
}

module.exports =  Rational;
