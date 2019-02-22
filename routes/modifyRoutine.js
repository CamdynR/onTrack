var defaultData = require('../defaultRoutine.json');
fs = require('fs');
var m = JSON.parse(fs.readFileSync('defaultRoutine.json').toString());
var routineOne = require('../empty.json');
var host;

exports.saveRoutine = function(req,res) {
	// console.log(m.Routine1[0]['name']);
	// var task1 = new JSONObject();
	// task1.push('name', req.query.nameIn0);
	// task1.push('time', req.query.timeIn0);

	// var task2 = new JSONObject();
	// task2.push('name', req.query.nameIn1);
	// task2.push('time', req.query.timeIn1);

	// var task3 = new JSONObject();
	// task3.push('name', req.query.nameIn2);
	// task3.push('time', req.query.timeIn2);

	// var task4 = new JSONObject();
	// task4.push('name', req.query.nameIn3);
	// task4.push('time', req.query.timeIn3);

	// var task5 = new JSONObject();
	// task5.push('name', req.query.nameIn4);
	// task5.push('time', req.query.timeIn4);

	// var routineOne = new JSONObject();
	console.log(routineOne);

	if (routineOne.Routine1.length == 5) {
		routineOne.Routine1.pop();
		routineOne.Routine1.pop();
		routineOne.Routine1.pop();
		routineOne.Routine1.pop();
		routineOne.Routine1.pop();

		routineOne.Routine2.pop();
		routineOne.Routine2.pop();
		routineOne.Routine2.pop();
		routineOne.Routine2.pop();
		routineOne.Routine2.pop();

		routineOne.Routine3.pop();
		routineOne.Routine3.pop();
		routineOne.Routine3.pop();
		routineOne.Routine3.pop();
		routineOne.Routine3.pop();
	}

	routineOne.Routine1.push({"name": req.query.nameIn0, "time": req.query.timeIn0});
	routineOne.Routine1.push({"name": req.query.nameIn1, "time": req.query.timeIn1});
	routineOne.Routine1.push({"name": req.query.nameIn2, "time": req.query.timeIn2});
	routineOne.Routine1.push({"name": req.query.nameIn3, "time": req.query.timeIn3});
	routineOne.Routine1.push({"name": req.query.nameIn4, "time": req.query.timeIn4});

	routineOne.Routine2.push({"name": req.query.nameIn5, "time": req.query.timeIn5});
	routineOne.Routine2.push({"name": req.query.nameIn6, "time": req.query.timeIn6});
	routineOne.Routine2.push({"name": req.query.nameIn7, "time": req.query.timeIn7});
	routineOne.Routine2.push({"name": req.query.nameIn8, "time": req.query.timeIn8});
	routineOne.Routine2.push({"name": req.query.nameIn9, "time": req.query.timeIn9});

	routineOne.Routine3.push({"name": req.query.nameIn10, "time": req.query.timeIn10});
	routineOne.Routine3.push({"name": req.query.nameIn11, "time": req.query.timeIn11});
	routineOne.Routine3.push({"name": req.query.nameIn12, "time": req.query.timeIn12});
	routineOne.Routine3.push({"name": req.query.nameIn13, "time": req.query.timeIn13});
	routineOne.Routine3.push({"name": req.query.nameIn14, "time": req.query.timeIn14});
	
	console.log(routineOne);

	// routineOne.push(task2);
	// routineOne.push(task3);
	// routineOne.push(task4);
	// routineOne.push(task5);



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

	host = routineOne
	res.render('viewRoutine', host);

}


