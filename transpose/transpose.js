module.exports = function(start) {
    const max_col = start.reduce((max, row) => Math.max(max, row.length), 0);
    result = [];
    for(var c = 0; c < max_col; c++) {
        var prefix = true;
        result.push([]);
        for(var r = 0; r < start.length; r++) {
            result[c][r] = start[r][c];
            if(prefix && result[c][r] == undefined)
                result[c][r] = ' ';
            else
                prefix = false;
        }
    }
    return result.map(row => row.join(''));
}
