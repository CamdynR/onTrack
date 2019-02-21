
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
var loggedIn = require('./routes/loggedIn');
var selectRoutine = require('./routes/selectRoutine');

//Routine 1 Pages
var startOne = require('./routes/startOne');
var oneR1 = require('./routes/oneR1');
var twoR1 = require('./routes/twoR1');
var threeR1 = require('./routes/threeR1');
var fourR1 = require('./routes/fourR1');

//Routine 2 Pages
var startTwo = require('./routes/startTwo');
var oneR2 = require('./routes/oneR2');
var twoR2 = require('./routes/twoR2');
var threeR2 = require('./routes/threeR2');
var fourR2 = require('./routes/fourR2');

//Routine 3 Pages
var startThree = require('./routes/startThree');
var oneR3 = require('./routes/oneR3');
var twoR3 = require('./routes/twoR3');
var threeR3 = require('./routes/threeR3');
var fourR3 = require('./routes/fourR3');
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
app.get('/loggedIn', loggedIn.loggedIn);
app.get('/selectRoutine', selectRoutine.selectRoutine);

//Routine 1 Pages
app.get('/startOne', startOne.startOne);
app.get('/oneR1', oneR1.oneR1);
app.get('/twoR1', twoR1.twoR1);
app.get('/threeR1', threeR1.threeR1);
app.get('/fourR1', fourR1.fourR1);

//Routine 2 Pages
app.get('/startTwo', startTwo.startTwo);
app.get('/oneR2', oneR2.oneR2);
app.get('/twoR2', twoR2.twoR2);
app.get('/threeR2', threeR2.threeR2);
app.get('/fourR2', fourR2.fourR2);

//Routine 3 Pages
app.get('/startThree', startThree.startThree);
app.get('/oneR3', oneR3.oneR3);
app.get('/twoR3', twoR3.twoR3);
app.get('/threeR3', threeR3.threeR3);
app.get('/fourR3', fourR3.fourR3);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
