class Flattener {
    flatten(array) {
        if(array == null) {
            return [];
        } else if(array.constructor != Array) {
            return [array];
        }

        var result = [];
        for(var i = 0; i < array.length; i++) {
            result.push.apply(result, this.flatten(array[i]));
        }
        return result;
    }
}

module.exports = Flattener;
