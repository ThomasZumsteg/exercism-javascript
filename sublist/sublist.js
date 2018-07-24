class List {
    constructor(elements) {
        this.elements = elements || [];
    }

    compare(list) {
        var result;
        var listA = this.elements;
        var listB = list.elements;
        if(listA.length < listB.length) {
            result = "SUBLIST";
        } else if(listB.length < listA.length) {
            result = "SUPERLIST";
            listA = list.elements;
            listB = this.elements;
        } else {
            result = "EQUAL";
        }
        for(var i = 0; i < listB.length - listA.length; i++) {
            // console.log("Next");
            for(var j = 0; j < listA.length; j++) {
                // console.log(listB[i + j] + " - " + listA[j]);
            }
        }
        return result;
    }
}

module.exports = List;
