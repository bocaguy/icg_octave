//EXPRESS:

var express = require("express");
var app = express();
var flash    = require('connect-flash');

//PASSPORT AUTHENTICATION:

var passport = require('passport');
require('./config/passport')(passport);  // pass passport for configuration

// CONFIGURATION:

app.configure(function() 
{
 
  //  express application configuration
  app.use(express.logger('dev'));  // log every request to the console
  app.use(express.cookieParser());  // read cookies need for the authenticatiom
  app.use(express.bodyParser());  // get information from html forms

  app.set('view  engine', 'ejs'); // set up ejs for templating

  //  required for passport
  app.use(express.session({  secret: 'mindstickarticles' })); //create sessin mindsticarticle
  app.use(passport.initialize());  // passport intialize
  app.use(passport.session());  // persistent login sessions of passport
  app.use(flash());  // use connect-flash for flash messages stored in session

});

// ROUTES:

require('.//routes.js')(app,  passport); // load our routes and pass in our app and fully configured  passport

// MONGOOSE/MONGODB:

var mongoose = require('mongoose');
var configDB =  require('./config/database.js');
mongoose.connect(configDB.connectionString); //  connect to our database


// POSTGRESQL/SEQUELIZE:

var dbPG = require('./config/postgres.js');

// START NODE.JS SERVER (Express)

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Server Loaded On " + port);
  console.log("IP Address Is: " + process.env.IP);
  console.log("Database Server: " + configDB.dbServer);
});

