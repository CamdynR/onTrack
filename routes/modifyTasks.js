var data = require('../userRoutines.json');

exports.modifyTasks = function(req,res) {
	var routName = req.query.routineLabel;
	console.log(req.query.routineLabel);
	var toPush = {'name': req.query.tempName, 'time': req.query.tempTime}
	data.newUser.routName.push(toPush);
	res.render('taskEditor', data['newUser'][3]);

}