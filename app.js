
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var login = require('./routes/login');
var viewRoutine = require('./routes/viewroutine');
var modifyRoutine = require('./routes/modifyRoutine');
var addRoutine = require('./routes/addRoutine');
var loggedIn = require('./routes/loggedIn');
var selectRoutine = require('./routes/selectRoutine');
var tester = require('./routes/tester');
var updater = require('./routes/update');
var clear = require('./routes/clear');

//Routine 1 Pages
var startOne = require('./routes/startOne');

//Routine 2 Pages
var startTwo = require('./routes/startTwo');

//Routine 3 Pages
var startThree = require('./routes/startThree');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', login.loginNow);
app.get('/viewRoutine', viewRoutine.loadView);
app.get('/modifyRoutine', modifyRoutine.saveRoutine);
app.get('/addRoutine', addRoutine.addNow);
app.get('/loggedIn', loggedIn.loggedIn);
app.get('/selectRoutine', selectRoutine.selectRoutine);
app.get('/tester',tester.testing);
app.get('/update',updater.updateView);
app.get('/clear', clear.clearRoutine);


//Routine 1 Pages
app.get('/startOne', startOne.startOne);

//Routine 2 Pages
app.get('/startTwo', startTwo.startTwo);

//Routine 3 Pages
app.get('/startThree', startThree.startThree);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
