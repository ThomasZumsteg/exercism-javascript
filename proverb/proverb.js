class Proverb {
    constructor() {
        var args = Array.from(arguments);
        this.words = args.filter(arg => typeof arg == 'string');
        var nargs = args.filter(arg => typeof arg == 'object')[0];
        this.qualifier = nargs && nargs.qualifier;
    }

    toString() {
        var result = [];
        for(var i = 1; i < this.words.length; i++) {
            result.push( 'For want of a ' +  this.words[i-1] +
                ' the ' +  this.words[i] + ' was lost.');
        }
        result.push('And all for the want of a ' +
            (this.qualifier ? this.qualifier + ' ' : '') + this.words[0] + '.');
        return result.join('\n');
    }
}

module.exports = Proverb;
