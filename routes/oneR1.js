var defaultData = require('../defaultRoutine.json');
var routineOne = require('../empty.json');

exports.oneR1= function(req,res) {
	if ((routineOne.Routine1.length > 0) | (routineOne.Routine2.length > 0) | (routineOne.Routine3.length > 0)) {
		res.render('oneR1', routineOne);
	}
	else {
		res.render("oneR1", defaultData);
	}
};