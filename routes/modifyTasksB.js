var data = require('../currentUsers.json');

exports.modifyTasks = function(req,res) {
	var toPush = {'name': req.query.tempName, 'time': req.query.tempTime}
	var index = data.Users[0].Routines.length
	data.Users[0].Routines[2].Tasks.push(toPush);
	res.render('taskEditorB', data.Users[0].Routines[2]);
}