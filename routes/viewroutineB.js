// var defaultData = require('../defaultRoutine.json');
// var routineOne = require('../userRoutines.json');
var data = require('../currentUsers.json');

exports.loadView = function(req,res) {
	res.render("viewRoutineB", data);
	// if ((routineOne.Routine1.length > 0) | (routineOne.Routine2.length > 0) | (routineOne.Routine3.length > 0)) {
	// 	res.render('viewRoutine', routineOne);
	// }
	// else {
	// 	res.render("viewRoutine", defaultData);
	// }
};
