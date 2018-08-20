function is_rectangle(diagram, top_left, bottom_right) {
    if(diagram[top_left.row][top_left.col] != '+' ||
        diagram[bottom_right.row][bottom_right.col] != '+' ||
        diagram[bottom_right.row][top_left.col] != '+' ||
        diagram[top_left.row][bottom_right.col] != '+')
        return false;
    for(var row = top_left.row; row <= bottom_right.row; row++) {
        if(!(diagram[row][top_left.col] == '|' || 
             diagram[row][top_left.col] == '+') ||
           !(diagram[row][bottom_right.col] == '|' ||
             diagram[row][bottom_right.col] == '+'))
            return false;
    }
    for(var col = top_left.col; col <= bottom_right.col; col++) {
        if(!(diagram[top_left.row][col] == '-' || 
             diagram[top_left.row][col] == '+') ||
           !(diagram[bottom_right.row][col] == '-' ||
             diagram[bottom_right.row][col] == '+'))
            return false;
    }
    return true;
}

module.exports = function(diagram) {
    var count = 0;
    for(var r = 0; r < diagram.length; r++) {
        for(var c = 0; c < diagram[r].length; c++) {
            if(diagram[r][c] == '+') {
                for(var i = r + 1; i < diagram.length; i++) {
                    for(var j = c + 1; j < diagram[r].length; j++) {
                        if(is_rectangle(diagram, {row: r, col: c}, {row: i, col: j})) {
                            count += 1
                        }
                    }
                }
            }
        }
    }
    return count;
}
