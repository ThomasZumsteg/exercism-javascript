class Minesweeper {
    static countMines(field, row, col) {
        const diffs = [[1,1], [1,0], [1,-1], [0,1], [0,-1], [-1,1], [-1,0], [-1,-1]];
        return 0;
    }

    annotate(field) {
        field = field.map(row => row.split(''));
        var mines;
        for(var r = 0; r < field.length; r++) {
            for(var c = 0; c < field[r].length; c++) {
                if(field[r][c] == ' ') {
                    mines = Minesweeper.countMines(field, r, c);
                    field[r][c] = '1';
                }
            }
        }
        return field.map(row => row.join(''));
    }
}

module.exports = Minesweeper
