var data = require('../currentUsers.json');

exports.selectRoutineB = function(req,res) {
	res.render('selectRoutineB', data);
};
