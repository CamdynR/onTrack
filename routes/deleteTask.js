var data = require('../currentUsers.json');

exports.deleteTask = function(req,res) {
	// console.log(req.query.task);
	var index = req.query.task;
	var parent = req.query.parentRoutine;
	console.log("Parent");
	console.log(parent);
	data.Users[0].Routines[parent].Tasks.splice(index,index+1);
	res.render('taskEditorB', data.Users[0].Routines[parent]);
}