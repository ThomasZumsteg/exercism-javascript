module.exports = function(start) {
    start = start.map(row => row.split(''));
    max_col = start.reduce((max, row) => Math.max(max, row.length), 0);
    result = [];
    for(var r = 0; r < start.length; r++) {
        for(var c = 0; c < max_col; c++) {
            if(result[c] == undefined)
                result[c] = []
            result[c][r] = start[r][c] != undefined ? start[r][c] : ' ';
        }
    }
    return result.map(row => row.join(''));
}
