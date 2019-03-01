var defaultData = require('../defaultRoutine.json');

exports.selectRoutineB = function(req,res) {
	res.render('selectRoutineB', defaultData);
};
