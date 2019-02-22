var defaultData = require('../empty.json');

exports.startThree = function(req, res){
  res.render('startThree', defaultData);
};