var mongoose = require('mongoose');
var mongoObjectRocket = "mongodb://octave_user:#_Clobber8@iad-c11-0.objectrocket.com:48173,iad-c11-1.objectrocket.com:48173/db1";
var mongoHeroku = "mongodb://heroku_gmjhjm33:12jbre09t6k27cf262rs2faq1c@ds063892.mongolab.com:63892/heroku_gmjhjm33";
var MongoDB = mongoose.connect(mongoHeroku).connection;
MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
  console.log("mongodb connection open");
});