var defaultData = require('../defaultRoutine.json');
var routineOne = require('../empty.json');
var pageNumber = 0;

exports.startTwo = function(req,res) {
	if ((routineOne.Routine2.length > 0) && (routineOne.Routine2.length > pageNumber)) {
		res.render('startTwo', routineOne.Routine2[pageNumber]);
		pageNumber++;
	}
	else if (defaultData.Routine2.length > pageNumber) {
		res.render("startTwo", defaultData.Routine2[pageNumber]);
		pageNumber++;
	}
	else {
		pageNumber = 0;
		res.render("loggedIn");
	}
};