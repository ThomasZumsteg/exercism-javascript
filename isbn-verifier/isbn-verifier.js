export default class ISBN {
  constructor(digits) {
    this.digits = digits;
  }

  isValid() {
    let sum = 0;
    let digit = 10;
    for (let d of this.digits.split('')) {
      if (digit <= 0) { return false; }
      if ((d >= '0' && d <= '9') ||
          (digit === 1 && d === 'X')) {
        sum += digit * (d === 'X' ? 10 : d - '0');
        digit -= 1;
      }
    }
    return digit === 0 && sum % 11 === 0;
  }
}
