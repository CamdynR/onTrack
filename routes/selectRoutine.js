var defaultData = require('../defaultRoutine.json');

exports.selectRoutine = function(req,res) {
	res.render('selectRoutine', defaultData);
};
