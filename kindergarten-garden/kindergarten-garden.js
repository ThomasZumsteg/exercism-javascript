var DEFAULT_STUDENTS = [ 'Alice', 'Bob', 'Charlie', 'David', 'Eve', 
		'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];

var Garden = function(garden, students) {
	/* A Kindergarden plant garden */
	students ? students.sort(): (students = DEFAULT_STUDENTS);
	garden = garden.split('\n').map(MakeRow);

	for(var i = 0; i < students.length; i++) {
		this[students[i].toLowerCase()] = StudentsGarden(garden, i);
	}
};

function MakeRow(row) {
	/* Converts a row of plant letters to an array of plants */
	plant_map = {'C': 'clover', 'G': 'grass', 'R': 'radishes', 'V': 'violets'};
	return row.split('').map( function(plant) { return plant_map[plant] });
}

function StudentsGarden(garden, position) {
	/* The plants owned by an individual student */
	return garden.reduce(function(plants, row) {
		return plants.concat(row.slice(2 * position, 2 * position + 2));
	}, []);
}

module.exports = Garden;