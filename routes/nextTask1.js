var defaultData = require('../defaultRoutine.json');

exports.nextTask1 = function(req, res){
  res.render('nextTask1', defaultData);
};