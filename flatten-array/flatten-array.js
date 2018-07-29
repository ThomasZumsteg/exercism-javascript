class Flattener {
    flatten(array) {
        if(array == null) { return [] }
        else if(array.constructor != Array) { return [array] }
        return array.reduce((acc, elem) => acc.concat(this.flatten(elem)), []);
    }
}

module.exports = Flattener;
