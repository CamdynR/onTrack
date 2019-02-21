var defaultData = require('../defaultRoutine.json');

exports.startTwo = function(req, res){
  res.render('startTwo', defaultData);
};