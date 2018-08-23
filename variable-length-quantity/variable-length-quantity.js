module.exports = {
  encode(number) {
    const result = [];
    for (let remaining of number) {
      let set = [];
      while (remaining > 0) {
        set.unshift((remaining & 0x7f) | 0x80);
        remaining >>>= 7;
      }
      if(set.length === 0)
        set.push(0);
      else
        set[set.length - 1] &= 0x7f;
      result.push(...set);
    }
    return result;
  },
};
