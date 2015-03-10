var circularBuffer = function (size) {
	/* A circular buffer */
	var buffer = [];
	
	return {
		read: function() {
			/* Reads data from the buffer */
			if(buffer.length <= 0)
				throw new bufferEmptyException();
			return buffer.shift();
		},
		
		write: function(data) {
			/* Writes data to the buffer */
			if(buffer.length >= size)
				throw new bufferFullException();
			if(data)
				buffer.push(data);
		},
		
		/* Clears the buffer */
		clear: function() { buffer = [] },
		
		forceWrite: function(data) {
			/* Writes data to the buffer even if it will overwrite data */
			if(buffer.length >= size)
				buffer.shift();
			buffer.push(data);
		},
	};
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
