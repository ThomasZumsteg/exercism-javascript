class ComplexNumber {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }

    add(other) {
        return new ComplexNumber(this.real + other.real, this.imag + other.imag);
    }

    sub(other) {
        return new ComplexNumber(this.real - other.real, this.imag - other.imag);
    }

    mul(other) {
        return new ComplexNumber(
            this.real * other.real - this.imag * other.imag,
            this.real * other.imag + this.imag * other.real);
    }

    div(other) {
        var denom = other.real * other.real + other.imag * other.imag;
        var realNum = this.real * other.real + this.imag * other.imag;
        var imagNum = other.real * this.imag - other.imag * this.real;
        return new ComplexNumber(realNum / denom, imagNum / denom);
    }

    get abs() {
        return Math.pow(Math.pow(this.real, 2) + Math.pow(this.imag, 2), 0.5);
    }

    get conj() {
        return new ComplexNumber(this.real, this.imag == 0 ? 0 : -this.imag);
    }

    get exp() {
        return new ComplexNumber(
            Math.exp(this.real) * Math.cos(this.imag),
            Math.exp(this.real) * Math.sin(this.imag));
    }
}

module.exports = ComplexNumber;
