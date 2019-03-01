// var defaultData = require('../defaultRoutine.json');
// fs = require('fs');
// var m = JSON.parse(fs.readFileSync('defaultRoutine.json').toString());
var data = require('../currentUsers.json');

exports.saveRoutineB = function(req,res) {
	console.log(req.query.rout);
	var routName = String(req.query.tempName);
	var toPush = {"Name": routName,"Index":data.Users[0].Routines.length,"Tasks": []}
	if (typeof req.query.rout == "undefined") {
		var index = data.Users[0].Routines.length;
	}
	else {
		var index = req.query.rout;
	}
	data.Users[0].Routines.push(toPush);
	// console.log(data.Users[0].Routines);
	//data.newUser[3] = toPush;

	// if (routineOne.Routine1.length == 5) {
	// 	// routineOne.Routine1.pop();
	// 	// routineOne.Routine1.pop();
	// 	// routineOne.Routine1.pop();
	// 	// routineOne.Routine1.pop();
	// 	// routineOne.Routine1.pop();

	// 	// routineOne.Routine2.pop();
	// 	// routineOne.Routine2.pop();
	// 	// routineOne.Routine2.pop();
	// 	// routineOne.Routine2.pop();
	// 	// routineOne.Routine2.pop();

	// 	// routineOne.Routine3.pop();
	// 	// routineOne.Routine3.pop();
	// 	// routineOne.Routine3.pop();
	// 	// routineOne.Routine3.pop();
	// 	// routineOne.Routine3.pop();
	// }

	// routineOne.Routine1.push({"name": req.query.nameIn0, "time": req.query.timeIn0});
	// routineOne.Routine1.push({"name": req.query.nameIn1, "time": req.query.timeIn1});
	// routineOne.Routine1.push({"name": req.query.nameIn2, "time": req.query.timeIn2});
	// routineOne.Routine1.push({"name": req.query.nameIn3, "time": req.query.timeIn3});
	// routineOne.Routine1.push({"name": req.query.nameIn4, "time": req.query.timeIn4});

	// routineOne.Routine2.push({"name": req.query.nameIn5, "time": req.query.timeIn5});
	// routineOne.Routine2.push({"name": req.query.nameIn6, "time": req.query.timeIn6});
	// routineOne.Routine2.push({"name": req.query.nameIn7, "time": req.query.timeIn7});
	// routineOne.Routine2.push({"name": req.query.nameIn8, "time": req.query.timeIn8});
	// routineOne.Routine2.push({"name": req.query.nameIn9, "time": req.query.timeIn9});

	// routineOne.Routine3.push({"name": req.query.nameIn10, "time": req.query.timeIn10});
	// routineOne.Routine3.push({"name": req.query.nameIn11, "time": req.query.timeIn11});
	// routineOne.Routine3.push({"name": req.query.nameIn12, "time": req.query.timeIn12});
	// routineOne.Routine3.push({"name": req.query.nameIn13, "time": req.query.timeIn13});
	// routineOne.Routine3.push({"name": req.query.nameIn14, "time": req.query.timeIn14});
	
	//console.log(routineOne);


	// m.Routine1[0]['name'] = req.query.nameIn0;
	// m.Routine1[1]['name'] = req.query.nameIn1;
	// m.Routine1[2]['name'] = req.query.nameIn2;
	// m.Routine1[3]['name'] = req.query.nameIn3;
	// m.Routine1[4]['name'] = req.query.nameIn4;

	// m.Routine1[0]['time'] = req.query.timeIn0;
	// m.Routine1[1]['time'] = req.query.timeIn1;
	// m.Routine1[2]['time'] = req.query.timeIn2;
	// m.Routine1[3]['time'] = req.query.timeIn3;
	// m.Routine1[4]['time'] = req.query.timeIn4;


	// m.Routine2[0]['name'] = req.query.nameIn5;
	// m.Routine2[1]['name'] = req.query.nameIn6;
	// m.Routine2[2]['name'] = req.query.nameIn7;
	// m.Routine2[3]['name'] = req.query.nameIn8;
	// m.Routine2[4]['name'] = req.query.nameIn9;

	// m.Routine2[0]['time'] = req.query.timeIn5;
	// m.Routine2[1]['time'] = req.query.timeIn6;
	// m.Routine2[2]['time'] = req.query.timeIn7;
	// m.Routine2[3]['time'] = req.query.timeIn8;
	// m.Routine2[4]['time'] = req.query.timeIn9;


	// m.Routine3[0]['name'] = req.query.nameIn10;
	// m.Routine3[1]['name'] = req.query.nameIn11;
	// m.Routine3[2]['name'] = req.query.nameIn12;
	// m.Routine3[3]['name'] = req.query.nameIn13;
	// m.Routine3[4]['name'] = req.query.nameIn14;

	// m.Routine3[0]['time'] = req.query.timeIn10;
	// m.Routine3[1]['time'] = req.query.timeIn11;
	// m.Routine3[2]['time'] = req.query.timeIn12;
	// m.Routine3[3]['time'] = req.query.timeIn13;
	// m.Routine3[4]['time'] = req.query.timeIn14;

	


	// fs.writeFile('defaultRoutine.json', JSON.stringify(m),function(err, result) {
 //     	if(err) console.log('error', err);
 //   	});
 	// console.log(data.Users[0].Routines[index]);
	res.render('taskEditorB', data.Users[0].Routines[index]);

}


