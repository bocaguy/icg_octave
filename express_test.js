var express = require("express");
var app = express();

//var logfmt = require("logfmt");
//app.use(logfmt.requestLogger());

// Mongoose
var mongoConnTest = 'mongodb://octave_user:#_Clobber8@ :48173,iad-c11-1.objectrocket.com:48173/db1'
var mongoose = require('mongoose');
var dbServer = 'Test';
var Schema = mongoose.Schema;

if (process.env.MONGOHQ_URL) 
{
  mongoose.connect(process.env.MONGOHQ_URL);
  dbServer = 'Prod';
}
else 
{
  mongoose.connect(mongoConnTest);
  dbServer = 'Test';
}

var schemaDealInfo = new Schema({
  Client: String,
  Deal: String,
  LoanCount: Number
}, 
  { collection : 'DealInfo' }
);

var deal = mongoose.model('DealInfo', schemaDealInfo);

app.get('/', function(req, res) 
{
      deal.find({ Deal: 'ACE' }, function(err, dealFound) 
      {
        if (err) throw err;
        res.send(dbServer + ":" + dealFound);
      });
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Server Loaded On " + port);
  console.log("IP Address Is: " + process.env.IP);
  console.log("Environment Is: " + dbServer);
  if (process.env.MONGOHQ_URL) 
  {
      console.log("Database is: " + dbServer);
  }
});
