export default class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }

  find(words) {
    let result = words.reduce((acc, w) => { acc[w] = undefined; return acc }, {});
    for (let r = 0; r < this.grid.length; r++) {
      for (let c = 0; c < this.grid[r].length; c++) {
        for (let word of words) {
          let end = this.search(word, r, c)
          if (end != undefined) {
            result[word] = {"start": [r, c], "end": end};
          }
        }
      }
    }
    return result;
  }

  search(word, row, col) {
    let diffs = [
      {"row":  1, "col":  1},
      {"row":  1, "col":  0},
      {"row":  1, "col": -1},
      {"row":  0, "col":  1},
      {"row":  0, "col": -1},
      {"row": -1, "col":  1},
      {"row": -1, "col":  0},
      {"row": -1, "col": -1},
    ]
    for (let diff of diffs) {
      for (let pos = 0; pos < word.length; pos++) {
        if (this.grid[diff.row * pos + row] == undefined ||
            word[pos] != this.grid[diff.row * pos + row][diff.col * pos + col])
          break
      }
    }
  }
}
