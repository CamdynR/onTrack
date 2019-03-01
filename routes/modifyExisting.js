var data = require('../currentUsers.json');

exports.modifyExisting = function(req,res) {
	console.log(req.query.rout);
	var index = req.query.rout;
	res.render('taskEditor', data.Users[0].Routines[index]);
}