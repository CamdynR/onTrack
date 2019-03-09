var data = require('../currentUsers.json');

exports.updateTasks = function(req,res) {
	var index = req.query.editIndex;
	console.log(index);
	var routineName = req.query.routName;
	var routineIndex = req.query.editIndex;
	var taskArr = [];
	var taskTime = req.query.tempTime;
	var taskName = req.query.tempName;
	var toPush;
	var toLoop = data.Users[0].Routines[index].Tasks.length;
	for (i = 0; i < toLoop; i++) {
		toPush = {"name": taskName[i], "time": taskTime[i]}
		taskArr.push(toPush);
	}
	var newDict = {"Name": routineName, "Index": routineIndex, "Tasks": taskArr};
	data.Users[0].Routines.splice(index,index+1);
	data.Users[0].Routines.splice(index,0,newDict);
	res.render('viewRoutineB', data);
}