var defaultData = require('../empty.json');

exports.startTwo = function(req, res){
  res.render('startTwo', defaultData);
};