class List {
    constructor(values=[]) {
        this.values = values;
        this.push = function(value) { this.values.push(value); return this };
    };

    append(list) {
        Array.prototype.push.apply(this.values, list.values);
        return this;
    };
    
    concat(list) { return this.append(list); };

    filter(func) {
        return this.foldl(
            function(val, acc) { return func(val) ? acc.push(val) : acc },
            new List());
    };

    map(func) {
        return this.foldl(
            function(val, acc) { return acc.push(func(val)); },
            new List());
    }

    foldl(func, acc) {
        for(var i = 0; i < this.values.length; i++) {
            acc = func(this.values[i], acc);
        }
        return acc;
    }

    foldr(func, acc) {
        for(var i = this.values.length-1; i >= 0; i--) {
            acc = func(this.values[i], acc);
        }
        return acc;
    }

    reverse() {
        return this.foldr( function(val, acc) { return acc.push(val) }, new List());
    }

    length() { return this.values.length; }
};

module.exports = List;
