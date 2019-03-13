// var defaultData = require('../defaultRoutine.json');
// fs = require('fs');
// var m = JSON.parse(fs.readFileSync('defaultRoutine.json').toString());
var data = require('../currentUsers.json');

exports.saveRoutineB = function(req,res) {
	console.log(req.query.rout);
	var routName = String(req.query.routName);
	var toPush = {"Name": routName,"Index":data.Users[0].Routines.length,"Tasks": []}
	if (typeof req.query.rout == "undefined") {
		var index = data.Users[0].Routines.length;
	}
	else {
		var index = req.query.rout;
	}
	data.Users[0].Routines.push(toPush);
	res.render('viewRoutineB', data);

}


