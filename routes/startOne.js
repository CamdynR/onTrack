var defaultData = require('../empty.json');

exports.startOne = function(req, res){
	res.render('startOne', defaultData);
};