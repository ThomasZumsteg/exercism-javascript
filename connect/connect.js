function transpose(board) {
    return board[0].map((col, i) => board.map(row => row[i]))
}

function hash(element) {
    return element.row + ':' + element.col;
}

function has_path(board, letter) {
    var seen = new Set();
    var queue = board[0].reduce((queue, e, i) => {
        if(e == letter)
            queue.push({row: 0, col:i});
        return queue}, new Array());
    while(0 < queue.length) {
        elem = queue.pop();
        if(seen.has(hash(elem)) || board[elem.row] == undefined ||
            board[elem.row][elem.col] != letter)
            continue;
        seen.add(hash(elem));
        if(board.length <= elem.row + 1)
            return true;
        [{dr: -1, dc:  0}, {dr: -1, dc: +1}, 
         {dr:  0, dc: +1}, {dr:  0, dc: -1},
         {dr: +1, dc: -1}, {dr: +1, dc:  0}].map(diff => 
            queue.push({row: elem.row + diff.dr, col: elem.col + diff.dc}));
    }
    return false;
}

class Board {
    constructor(board) {
        this.board = board.map(row => row.trim().split(' '));
    }

    winner() {
        if(has_path(this.board, 'O'))
            return 'O';
        if(has_path(transpose(this.board), 'X'))
            return 'X';
        return '';
    }
}

module.exports = Board;
