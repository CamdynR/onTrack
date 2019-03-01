var defaultData = require('../defaultRoutine.json');
var routineOne = require('../empty.json');
var pageNumber = 0;

exports.startThree = function(req,res) {
	if ((routineOne.Routine3.length > 0) && (routineOne.Routine3.length > pageNumber)) {
		res.render('startThree', routineOne.Routine3[pageNumber]);
		pageNumber++;
	}
	else if (defaultData.Routine1.length > pageNumber) {
		res.render("startThree", defaultData.Routine3[pageNumber]);
		pageNumber++;
	}
	else {
		pageNumber = 0;
		res.render("loggedIn");
	}
};