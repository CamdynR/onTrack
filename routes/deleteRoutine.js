var data = require('../currentUsers.json');

exports.deleteRoutine = function(req,res) {
	// console.log(req.query.task);
	var index = req.query.routIndex;
	console.log("Index");
	console.log(index);
	//data.Users[0].Routines.splice(index,index+1);
	console.log(data.Users[0].Routines);
	data.Users[0].Routines.splice(index,1);
	console.log(data.Users[0].Routines);
	res.render('viewRoutineB', data);
}