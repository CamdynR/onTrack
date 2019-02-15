
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
var addRoutine = require('./routes/addRoutine');
var startRoutine = require('./routes/startRoutine');
var loggedIn = require('./routes/loggedIn');
var nextTask1 = require('./routes/nextTask1');
var nextTask2 = require('./routes/nextTask2');
var nextTask3 = require('./routes/nextTask3');
var nextTask4 = require('./routes/nextTask4');
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
app.get('/addRoutine', addRoutine.addNow);
app.get('/startRoutine', startRoutine.startNow);
app.get('/loggedIn', loggedIn.loggedIn);
app.get('/nextTask1', nextTask1.nextTask1);
app.get('/nextTask2', nextTask2.nextTask2);
app.get('/nextTask3', nextTask3.nextTask3);
app.get('/nextTask4', nextTask4.nextTask4);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
