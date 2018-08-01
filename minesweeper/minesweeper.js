class Minesweeper {
    static countMines(field, row, col) {
        const diffs = [
            [row+1,col+1], [row+1,col], [row+1,col-1],
            [row  ,col+1],              [row  ,col-1],
            [row-1,col+1], [row-1,col], [row-1,col-1]];
        var total = 0;
        for(var d = 0; d < diffs.length; d++) {
            if(0 <= diffs[d][0] && diffs[d][0] < field.length &&
               0 <= diffs[d][1] && diffs[d][1] < field[diffs[d][0]].length &&
               field[diffs[d][0]][diffs[d][1]] == '*') {
                total++;
            }
        }
        return total;
    }

    annotate(field) {
        field = field.map(row => row.split(''));
        var mines;
        for(var r = 0; r < field.length; r++) {
            for(var c = 0; c < field[r].length; c++) {
                if(field[r][c] == ' ') {
                    mines = Minesweeper.countMines(field, r, c);
                    field[r][c] = mines == 0 ? ' ' : mines;
                }
            }
        }
        return field.map(row => row.join(''));
    }
}

module.exports = Minesweeper
