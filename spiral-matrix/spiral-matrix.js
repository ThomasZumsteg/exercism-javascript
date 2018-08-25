module.exports = {
  ofSize(limit) {
    const bound = {
      row: { upper: limit - 1, lower: 1 },
      col: { upper: limit - 1, lower: 0 } };

    const result = new Array(limit).fill(null).map(() => new Array(limit));

    let position = { row: 0, col: 0 };
    let diff = { row: 0, col: 1 };

    for (let n = 1; n <= limit * limit; n += 1) {
      if (position.row >= result.length) { result.push([]); }

      result[position.row][position.col] = n;

      if (diff.col === 1 && position.col >= bound.col.upper) {
        bound.col.upper -= 1;
        diff = { row: 1, col: 0 };
      } else if (diff.row === 1 && position.row >= bound.row.upper) {
        bound.row.upper -= 1;
        diff = { row: 0, col: -1 };
      } else if (diff.col === -1 && position.col <= bound.col.lower) {
        bound.col.lower += 1;
        diff = { row: -1, col: 0 };
      } else if (diff.row === -1 && position.row <= bound.row.lower) {
        bound.row.lower += 1;
        diff = { row: 0, col: 1 };
      }
      position = { row: position.row + diff.row, col: position.col + diff.col };
    }
    return result;
  },
};
