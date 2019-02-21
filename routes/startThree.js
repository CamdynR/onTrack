var defaultData = require('../defaultRoutine.json');

exports.startThree = function(req, res){
  res.render('startThree', defaultData);
};