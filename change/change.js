class Change {
    calculate(coins, value) {
        var queue = [{change: [], purse: coins, remaining: value}];
        var min = []
        var state;
        while(0 < queue.length) {
            state = queue.pop();
            if(0 < min.length && min[0].length < state.change.length) {
                continue;
            } 
            if(state.remaining == 0) {
                if(min.length < 0 && state.change.length < min[0].length) {
                    min = [];
                }
                min.push(state.change.sort().reverse());
            } else {
                if(0 < state.purse.length) {
                    if(state.purse[0] <= state.remaining) {
                        queue.push({
                            change: [state.purse[0], ...state.change],
                            purse: state.purse,
                            remaining: state.remaining - state.purse[0]});
                    }
                    if(0 < state.purse.length) {
                        queue.push({
                            change: state.change,
                            purse: state.purse.slice(1),
                            remaining: state.remaining});
                    }
                }
            }
        }
        return min.length == 1 ? min[0] : min;
    }
}

module.exports = Change;
