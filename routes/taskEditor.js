var routineOne = require('../userRoutines.json');
exports.taskEditor = function(req,res) {
	var routName = req.query.curName;
	console.log(routineOne['newUser'][3]['routName']);
	res.render("taskEditor", routineOne['newUser'][3]['routName']);
};