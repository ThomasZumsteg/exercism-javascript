var CustomSet = function(items) {
	/* A set object */
	this.items = [];
	for(var i = 0; i < (items ? items.length : 0); i++)
		this.put(items[i]);
};

// Tests if item is in a set
CustomSet.prototype.member = function(item) { return this.items.indexOf(item) != -1 };
// Number of elements in the set
CustomSet.prototype.size = function() { return this.items.length };
// Makes a list from a set
CustomSet.prototype.toList = function() { return this.items };

CustomSet.prototype.put = function(item) {
	/* Insert an item into a set */
	if(!this.member(item))
		this.items.push(item);
	this.items.sort();
	return this;
};

CustomSet.prototype.eql = function(set_b) {
	/* Compares two sets for equality */
	if(this.items.length != set_b.items.length)
		return false;
	for(var i = 0; i < this.items.length; i++) {
		if(this.items[i] !== set_b.items[i])
			return false;
	}
	return true;
};

CustomSet.prototype.delete = function(item) {
	/* Removes an item from a set */
	this.items = this.items.filter(function(element){
		return element != item;
	});
	return this;
};

CustomSet.prototype.difference = function(set_b) {
	/* Items in one set and not in another */
	return new CustomSet( this.items.filter(function(item) {
		return !set_b.member(item);
	}));
};

CustomSet.prototype.disjoint = function(set_b) {
	/* Tests if there are no elements in common */
	if(this.size() == 0 || set_b.size() == 0)
		return true;
	return this.toList().every(function(element) {
		return !set_b.member(element);
	});
};

CustomSet.prototype.empty = function() {
	/* Remove all items from the set */
	this.items = [];
	return this;
};

CustomSet.prototype.intersection = function(set_b) {
	/* Items in both sets */
	return new CustomSet(this.toList().filter(function(element) {
		return set_b.member(element);
	}));
};


CustomSet.prototype.subset = function(set_b) {
	/* All elements of one set are contained in this set */
	return set_b.toList().every(function(element) {return this.member(element)}, this);
};

CustomSet.prototype.union = function(set_b) {
	/* Set containing elements from either set */
	return new CustomSet([].concat(this.toList(), set_b.toList()));
};

module.exports = CustomSet;
