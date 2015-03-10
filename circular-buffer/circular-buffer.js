var data = [];
var maxSize;

var circularBuffer = function (size) {
	/* A circular buffer */
	maxSize = size;
	clear();
	return {
		read: read,
		write: write,
		clear: clear,
		forceWrite: forceWrite,
	};
};

var read = function() {
	/* Reads data from the buffer */
	if(data.length <= 0)
		throw new bufferEmptyException();
	return data.shift();
};

var write = function(item) {
	/* Writes data to the buffer */
	if(data.length >= maxSize)
		throw new bufferFullException();
	if(item)
		data.push(item);
};

/* Clears the buffer */
var clear = function() { data = [] };

var forceWrite = function(item) {
	/* Writes data to the buffer even if it will overwrite data */
	if(data.length >= maxSize)
		read();
	write(item);
};

var bufferEmptyException = function() {
	/* Buffer is empty */
	return { 
    	name:        "Buffer Empty", 
    	message:     "Buffer is empty there is no data to read.", 
    	toString:    function(){return this.name + ": " + this.message;}
    }; 
};

var bufferFullException = function() {
	/* Buffer is full */
	return { 
    	name:        "Buffer Full", 
    	message:     "Buffer is full there is no space to write.", 
    	toString:    function(){return this.name + ": " + this.message;} 
    };
};

module.exports = {
	circularBuffer: circularBuffer,
	bufferEmptyException: bufferEmptyException,
	bufferFullException: bufferFullException,
};
