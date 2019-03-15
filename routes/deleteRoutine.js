var data = require('../currentUsers.json');

exports.deleteRoutine = function(req,res) {
	// console.log(req.query.task);
	var index = req.query.routIndex;
	console.log("Index");
	console.log(index);
	//data.Users[0].Routines.splice(index,index+1);
	console.log(data.Users[0].Routines);
	if (index == 0) {
		data.Users[0].Routines.splice(index,index+1);
	}
	else if (index == 1) {
		data.Users[0].Routines.splice(index,index);
	}
	else {
		data.Users[0].Routines.splice(index,index-1);
	}
	console.log(data.Users[0].Routines);
	res.render('viewRoutineB', data);
}