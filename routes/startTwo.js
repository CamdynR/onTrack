var defaultData = require('../defaultRoutine.json');
var routineOne = require('../empty.json');

exports.startTwo = function(req,res) {
	if ((routineOne.Routine1.length > 0) | (routineOne.Routine2.length > 0) | (routineOne.Routine3.length > 0)) {
		res.render('startTwo', routineOne);
	}
	else {
		res.render("startTwo", defaultData);
	}
};