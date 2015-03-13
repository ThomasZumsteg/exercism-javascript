var Allergies = function(code) {
	/* Uses a binary code to determine what someone is allergic to */
	this.code = code;
	this.allergieList = [
		'eggs',
		'peanuts',
		'shellfish',
		'strawberries',
		'tomatoes' ,
		'chocolate' ,
		'pollen' ,
		'cats',
	];
}

Allergies.prototype.list = function() {
	/* A list of thing the person is allergic to */
	return this.allergieList.filter( this.allergicTo, this);
};

Allergies.prototype.allergicTo = function(item, index) {
	/* If the person is allergic to an item */
	// Filter alread knows the index other look it up
	if(typeof index === 'undefined')
		index = this.allergieList.indexOf(item);
	return Boolean(this.code & (1 << index));
};

module.exports = Allergies;
