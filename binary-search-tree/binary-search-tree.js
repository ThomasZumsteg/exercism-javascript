var BinaryTree = function(data) {
	/* Tree data structure */
	this.data = data;
	this.left = null;
	this.right = null;
}

BinaryTree.prototype.insert = function(data) {
	/* Adds a value to the tree */
	var node = (data <= this.data) ? 'left' : 'right';
	if( this[node] )
		this[node].insert(data);
	else
		this[node] = new BinaryTree(data);
};

BinaryTree.prototype.each = function(func) {
	/* Sorted elements in the tree */
	if(this.left) this.left.each(func);
	func(this.data);
	if(this.right) this.right.each(func);
};

module.exports = BinaryTree;