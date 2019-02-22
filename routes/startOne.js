var defaultData = require('../defaultRoutine.json');

exports.startOne = function(req, res){
	res.render('startOne', defaultData);
};