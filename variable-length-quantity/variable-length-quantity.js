module.exports = {
  encode(number) {
    const result = [];
    let remaining = number;
    while ((remaining | 0x0) > 0) {
      result.unshift((remaining & 0x7f) | 0x80);
      remaining >>= 7;
    }
    if (result.length === 0) { return [0]; }
    result[result.length - 1] &= 0x7f;
    return result;
  },
};
