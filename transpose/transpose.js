module.exports = function(array) {
    array = array.map(row => row.split(''));
    result = [];
    for(var col = 0; col < array.map(row => row.length); col++) {
    }
    return result.map(row => row.join(''));
}
