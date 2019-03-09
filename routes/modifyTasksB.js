var data = require('../currentUsers.json');

exports.modifyTasksB = function(req,res) {
	var toPush = {'name': req.query.tempName, 'time': req.query.tempTime}
	var index = req.query.routIndex;
	var stay = req.query.stayOnPage;
	data.Users[0].Routines[index].Tasks.push(toPush);
		res.render('viewRoutineB', data);

}