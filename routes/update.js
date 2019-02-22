var defaultData = require('../defaultRoutine.json');

exports.updateView = function(req,res) {
	delete require.cache['update.js'];
	defaultData = require('../defaultRoutine.json');
	res.render('startOne', defaultData);
}