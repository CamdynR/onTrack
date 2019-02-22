var routineOne = require('../empty.json');

exports.clearRoutine = function(req,res) {
	console.log(routineOne);
	
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

	console.log(routineOne);
}