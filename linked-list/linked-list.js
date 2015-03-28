/* Wrapper around array class */
var LinkedList = function() { this.list = new Array() };
LinkedList.prototype.push = function(val) { this.list.push(val) };
LinkedList.prototype.pop = function() { return this.list.pop() };
LinkedList.prototype.shift = function() { return this.list.shift() };
LinkedList.prototype.unshift = function(val) { this.list.unshift(val) };
LinkedList.prototype.count = function() { return this.list.length };

LinkedList.prototype.delete = function(val) {
	/* Deletes the first occurance of a value */
	var index = this.list.indexOf(val);
	if( index > -1 )
		this.list.splice(index, 1);
};

module.exports = LinkedList;