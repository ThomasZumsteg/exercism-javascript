class List {
    constructor(elements) {
        this.elements = elements || [];
    }

    compare(list) {
        var swap = false;
        var match = false;
        var elementsMatch;

        var listA = this.elements;
        var listB = list.elements;

        if(listB.length > listA.length) {
            swap = true;
            var listA = list.elements;
            var listB = this.elements;
        }

        for(var i = 0; i <= listA.length - listB.length && !match; i++) {
            var elementsMatch = true;
            for(var j = 0; j < listB.length; j++) {
                if(listA[i + j] != listB[j]) {
                    elementsMatch = false;
                    break;
                }
            }
            if(elementsMatch) {
                match = true;
                break;
            }
        }

        if(match || listB.length == 0) {
            if(listB.length == listA.length) {
                return "EQUAL";
            } else if(swap) {
                return "SUBLIST";
            } else {
                return "SUPERLIST";
            }
        }
        return "UNEQUAL";
    }
}

module.exports = List;
