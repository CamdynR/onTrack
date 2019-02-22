var defaultData = require('../defaultRoutine.json');
fs = require('fs');
var m = JSON.parse(fs.readFileSync('defaultRoutine.json').toString());
exports.saveRoutine = function(req,res) {
	console.log(m.Routine1[0]['name']);

	m.Routine1[0]['name'] = req.query.nameIn0;
	m.Routine1[1]['name'] = req.query.nameIn1;
	m.Routine1[2]['name'] = req.query.nameIn2;
	m.Routine1[3]['name'] = req.query.nameIn3;
	m.Routine1[4]['name'] = req.query.nameIn4;

	m.Routine1[0]['time'] = req.query.timeIn0;
	m.Routine1[1]['time'] = req.query.timeIn1;
	m.Routine1[2]['time'] = req.query.timeIn2;
	m.Routine1[3]['time'] = req.query.timeIn3;
	m.Routine1[4]['time'] = req.query.timeIn4;


	m.Routine2[0]['name'] = req.query.nameIn5;
	m.Routine2[1]['name'] = req.query.nameIn6;
	m.Routine2[2]['name'] = req.query.nameIn7;
	m.Routine2[3]['name'] = req.query.nameIn8;
	m.Routine2[4]['name'] = req.query.nameIn9;

	m.Routine2[0]['time'] = req.query.timeIn5;
	m.Routine2[1]['time'] = req.query.timeIn6;
	m.Routine2[2]['time'] = req.query.timeIn7;
	m.Routine2[3]['time'] = req.query.timeIn8;
	m.Routine2[4]['time'] = req.query.timeIn9;


	m.Routine3[0]['name'] = req.query.nameIn10;
	m.Routine3[1]['name'] = req.query.nameIn11;
	m.Routine3[2]['name'] = req.query.nameIn12;
	m.Routine3[3]['name'] = req.query.nameIn13;
	m.Routine3[4]['name'] = req.query.nameIn14;

	m.Routine3[0]['time'] = req.query.timeIn10;
	m.Routine3[1]['time'] = req.query.timeIn11;
	m.Routine3[2]['time'] = req.query.timeIn12;
	m.Routine3[3]['time'] = req.query.timeIn13;
	m.Routine3[4]['time'] = req.query.timeIn14;

	fs.writeFile('defaultRoutine.json', JSON.stringify(m),function(err, result) {
     	if(err) console.log('error', err);
   	});


	res.render('viewRoutine', m);
}

