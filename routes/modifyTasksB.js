var data = require('../currentUsers.json');
var a = require('../public/js/accordian.js');

exports.modifyTasksB = function(req,res) {
	var toPush = {'name': req.query.tempName, 'time': req.query.tempTime}
	var index = req.query.routIndex;
	//accordian();
	data.Users[0].Routines[index].Tasks.push(toPush);
	res.render('viewRoutineB', data);

}