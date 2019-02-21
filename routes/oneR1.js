var defaultData = require('../defaultRoutine.json');

exports.oneR1 = function(req, res){
  res.render('oneR1', defaultData);
};