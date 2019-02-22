var defaultData = require('../defaultRoutine.json');
var routineOne = require('../empty.json');

exports.fourR1 = function(req,res) {
	if ((routineOne.Routine1.length > 0) | (routineOne.Routine2.length > 0) | (routineOne.Routine3.length > 0)) {
		res.render('fourR1', routineOne);
	}
	else {
		res.render("fourR1", defaultData);
	}
};