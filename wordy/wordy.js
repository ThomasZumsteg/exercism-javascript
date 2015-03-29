var WordProblem = function(text) {
	/* Solves mathmatical word problems */
	this.text = text;
	this.operators = {
		"plus": '+',
		"minus": '-',
		"multiplied by": "*",
		"divided by": "/",
	};
	this.form = new RegExp("^What is (-?\\d+(?: (?:" + Object.keys(this.operators).join("|") + ") -?\\d+)+)\\?$");
}

WordProblem.prototype.answer = function() {
	/* Answers a mathmatical word problem */
	if(!this.text.match(this.form))
		throw new ArgumentError();
	var tokens = this.tokenize();
	return this.process(tokens);
};

WordProblem.prototype.tokenize = function() {
	/* Splits the word problem into javascript tokens */
	var text = this.text.match(this.form)[1];
	for(var operator in this.operators)
		text = text.replace(new RegExp(operator, "g"), this.operators[operator]);
	return text.split(" ");
};

WordProblem.prototype.process = function(tokens) {
	/* Evaluates the tokens in sequential order */
	var total = tokens.shift();
	while(tokens.length > 0)
		total = eval(total + " " + tokens.shift() + " " + tokens.shift());
	return total;
};

// An error
var ArgumentError = function() {}

module.exports = {
	WordProblem: WordProblem,
	ArgumentError: ArgumentError,
}
