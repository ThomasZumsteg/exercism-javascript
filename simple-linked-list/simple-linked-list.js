class List {
    constructor(head) {
        this.head = head;
        this.tail;
    }

    push(element) {
        var tail = this.head;
        if(!tail) {
            this.head = element;
            return;
        }
        while(tail.next) {
            tail = tail.next
        }
        tail.next = element;
    }

    unshift(element) {
        element.next = this.head;
        this.head = element;
    }

    shift() {
        var retVal = this.head;
        this.head = this.head.next;
        retVal.next = undefined;
        return retVal;
    }

    pop() {
        var tail = this.head;
        if(!tail) {
            return;
        } else if(!tail.next) {
            this.head = undefined;
            return;
        } else if(!tail.next.next) {
            tail.next = undefined;
            return;
        }
        while(!tail.next.next) {
            tail = tail.next;
        }
        var retVal = tail.next;
        tail.next = undefined;
        return retVal;
    }

    toArray() {
        var array = [];
        var head = this.head;
        while(head) {
            array.push(head.value)
            head = head.next;
        }
        return array;
    }

    reverse() {
        var revll = new List();
        while(this.head) {
            revll.unshift(this.shift());
        }
        this.head = revll.head;
    }
}

List.fromArray = function(elements) {
    var ll = new List();
    for(let val of elements) {
        ll.push(new Element(val));
    }
    return ll;
}

class Element {
    constructor(e, next) {
        if(e == null) {
            throw new Error("Requires a value");
        }
        this.value = e;
        if(!(next instanceof Element || typeof next == "undefined")) {
            throw new Error("Next value must be an Element");
        }
        this.next = next;
    }
}

module.exports = {
    List: List,
    Element: Element,
};
