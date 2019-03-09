var data = require('../currentUsers.json');

exports.deleteTask = function(req,res) {
	// console.log(req.query.task);
	var index = req.query.taskIndex;
	var parent = req.query.parentRoutine;
	var stay = req.query.stayOnPage;
	console.log("Index");
	console.log(index);
	if (index == 0) {
		data.Users[0].Routines[parent].Tasks.splice(index,index+1);
	}
	else {
		data.Users[0].Routines[parent].Tasks.splice(index,index);	
	}
	
	res.render('viewRoutineB', data);
}