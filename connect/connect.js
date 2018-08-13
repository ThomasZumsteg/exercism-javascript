class Board {
    constructor(board) {
        this.board = board.map(row => row.trim().split(' '));
    }

    winner() {
        var winner = '';
        var seen = new Set();
        for(let row of this.board) {
        }
        return winner;
    }
}

module.exports = Board;
