var defaultData = require('../defaultRoutine.json');

exports.startNow = function(req, res){
  res.render('startRoutine', defaultData);
};