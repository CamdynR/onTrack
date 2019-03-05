var data = require('../currentUsers.json');

exports.modifyExistingB = function(req,res) {
	console.log(req.query.rout);
	var index = req.query.routName;
	res.render('taskEditorB', data.Users[0].Routines[index]);
}