module.exports = {
  encode(number) {
    const result = [];
    for (let remaining of number) {
      const set = [];
      while (remaining > 0) {
        set.unshift(remaining & 0x7f | 0x80);
        remaining >>>= 7;
      }
      if (set.length === 0) {
        set.push(0);
      } else {
        set[set.length - 1] &= 0x7f;
      }
      result.push(...set);
    }
    return result;
  },
  decode(bytes) {
    const result = [];
    let value = 0;
    let processed = 0;
    for (const b of bytes) {
      value = (value << 7) | (b & 0x7f);
      processed += 1;
      if (!((b & 0x80) > 0)) {
        result.push(value>>>0);
        value = 0;
        processed = 0;
      }
    }
    if (processed !== 0) {
      throw new Error('Incomplete sequence');
    }
    return result;
  },
};
