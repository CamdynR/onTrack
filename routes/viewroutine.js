var defaultData = require('../defaultRoutine.json');

exports.loadView = function(req,res) {
	res.render("viewRoutine", defaultData);
};
