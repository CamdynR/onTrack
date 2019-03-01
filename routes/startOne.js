var defaultData = require('../defaultRoutine.json');
var routineOne = require('../empty.json');
var pageNumber = 0;

exports.startOne = function(req,res) {
	if ((routineOne.Routine1.length > 0) && (routineOne.Routine1.length > pageNumber)) {
		res.render('startOne', routineOne.Routine1[pageNumber]);
		pageNumber++;
	}
	else if (defaultData.Routine1.length > pageNumber) {
		res.render("startOne", defaultData.Routine1[pageNumber]);
		pageNumber++;
	}
	else {
		pageNumber = 0;
		res.render("loggedIn");
	}
};