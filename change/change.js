class Change {
    calculate(coins, value) {
        var queue = [([], coins, value)];
        var change, unusedCoins, remaining;
        while(queue.length > 0) {
            queue.pop();
        }
        return [1];
    }
}

module.exports = Change;
