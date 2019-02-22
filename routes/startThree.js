var defaultData = require('../defaultRoutine.json');
var routineOne = require('../empty.json');

exports.startThree = function(req,res) {
	if ((routineOne.Routine1.length > 0) | (routineOne.Routine2.length > 0) | (routineOne.Routine3.length > 0)) {
		res.render('startThree', routineOne);
	}
	else {
		res.render("startThree", defaultData);
	}
};