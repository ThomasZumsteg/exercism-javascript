var LinkedList = function() {
	/* A linked list */
	this.head = null;
	this.tail = null;
	this.length = 0;
}

LinkedList.prototype.push = function(val) {
	/* Adds a value to the end of the linked list */
	this.tail = new Element(val, null, this.tail);
	if(this.length >= 1)
		this.tail.prev.next = this.tail;
	else
		this.head = this.tail;
	this.length++;
};

LinkedList.prototype.pop = function() {
	/* Removes and returns a value from the end of the linked list */
	if(this.length === 0)
		return undefined;
	this.length--;
	var element = this.tail;
	this.tail = element.prev;
	if(this.length === 0)
		this.head = this.tail;
	element.delete();
	return element.val;
};

LinkedList.prototype.unshift = function(val) {
	/* Adds a value to the start of the linked list */
	this.head = new Element(val, this.head, null);
	if(this.length >= 1)
		this.head.next.prev = this.head;
	else
		this.tail = this.head;
	this.length++;
};

LinkedList.prototype.shift = function() {
	/* Removes and returns a value from the start of the linked list */
	if(this.length === 0)
		return undefined;
	this.length--;
	var element = this.head;
	this.head = element.next;
	if(this.length === 0)
		this.tail = this.head
	element.delete();
	return element.val;
};

LinkedList.prototype.count = function() {
	/* The length of the linked list */
	return this.length;
};

LinkedList.prototype.delete = function(val) {
	/* Removes the first element for a linked list with a certain value */ 
	var element = this.head;
	while(element && element.val !== val)
		element = element.next;
	if(element){
		this.length--;
		element.delete();
	}
};

var Element = function(val, next, prev) {
	/* Element of a linked list */
	this.val = val;
	this.next = next;
	this.prev = prev;
}

Element.prototype.delete = function() {
	/* Removes an element from the linked list */
	if(this.prev)
		this.prev.next = this.next;
	if(this.next)
		this.next.prev = this.prev;
	this.next = null;
	this.prev = null;
};

module.exports = LinkedList;