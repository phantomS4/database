var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tasks');

var Schema = mongoose.Schema;

var Tasks=new Schema({
	project:String,
	description:String
});
mongoose.model('Task',Tasks);

var Task = mongoose.model('Task');
var task = new Task();
task.project='Bikeshe';
task.description='Paint the bikeshed red.';

task.save(function(err){
	if(err) throw err;
	console.log('Task saved!!');
});

Task.find({'project':'Bikeshed'},function(err,tasks){
	for(var i = 0 ; i < tasks.length; i++)
	{
		console.log('ID: ' + tasks[i]._id);
		console.log('name:' + tasks[i].project);
		console.log(tasks[i].description);
	}
});
