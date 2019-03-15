var data = require('../currentUsers.json');

exports.deleteTask = function(req,res) {
	// console.log(req.query.task);
	var index = req.query.taskIndex;
	var parent = req.query.parentRoutine;
	var stay = req.query.stayOnPage;
	console.log("parRout");
	console.log(parent);
	console.log("taskIndex");
	console.log(index);
	console.log(data.Users[0].Routines[parent]);
	data.Users[0].Routines[parent].Tasks.splice(index,1);
	console.log(data.Users[0].Routines[parent]);
	res.render('viewRoutineB', data);
}