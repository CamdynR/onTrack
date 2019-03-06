var data = require('../currentUsers.json');

exports.editTasks = function(req,res) {
	var index = req.query.editIndex;
	var routineName = req.query.routName;
	
	res.render('editTasks', data.Users[0].Routines[index]);
}