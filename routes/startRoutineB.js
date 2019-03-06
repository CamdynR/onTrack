var data = require('../currentUsers.json');
var currentTask;
var index;
exports.startRoutineB = function(req,res) {
	if (req.query.reference == "selectRoutine") {
		index = req.query.routName;
		currentTask = req.query.curTask;
	}
	else {
		currentTask++;
	}
	console.log(index);
	console.log(currentTask);
	if (currentTask == data.Users[0].Routines[index].Tasks.length) {
		res.render('endRoutine');
	}
	else {
		res.render('startRoutineB', data.Users[0].Routines[index].Tasks[currentTask]);
	}
	
}