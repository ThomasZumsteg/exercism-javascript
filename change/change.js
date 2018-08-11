class Change {
    calculate(coins, value) {
        if(value < 0)
            throw new Error("Negative totals are not allowed.");
        var queue = [{
            change: [],
            purse: coins.sort((a, b) => b - a),
            remaining: value}];
        var state, min;
        while(0 < queue.length) {
            state = queue.pop();
            if(min != undefined && min.length <= state.change.length)
                continue;
            else if(state.remaining == 0)
                min = state.change.sort((a, b) => a - b);
            else if(0 < state.purse.length) {
                // Order matters, keep the larger coin on top
                if(0 < state.purse.length) {
                    queue.push({
                        change: state.change,
                        purse: state.purse.slice(1),
                        remaining: state.remaining});
                }
                if(state.purse[0] <= state.remaining) {
                    queue.push({
                        change: [state.purse[0], ...state.change],
                        purse: state.purse,
                        remaining: state.remaining - state.purse[0]});
                }
            }
        }
        if(min == undefined)
            throw new Error("The total " + value + " cannot be represented in the given currency.");

        return min;
    }
}

module.exports = Change;
