var data = require('../currentUsers.json');
exports.taskEditor = function(req,res) {
	var index = data.Users[0].Routines.length;
	res.render("taskEditor", data.Users[0].Routines[index]);
};