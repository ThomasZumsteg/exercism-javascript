/* A class to keep track of students in a school */
var School = function() { this.class = {} };

// The entire school
School.prototype.roster = function() { return this.class };
// A grade level of the school
School.prototype.grade = function(grade) { return this.class[grade] || [] };

School.prototype.add = function(student, grade) {
	/* Adds students to the school */
	if( grade in this.class ) {
		this.class[grade].push(student);
		this.class[grade].sort();
	}
	else
		this.class[grade] = [student];
};

module.exports = School;