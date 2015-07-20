var express = require("express");
var app = express();

//var logfmt = require("logfmt");
//app.use(logfmt.requestLogger());

// Mongoose
var mongoConnectionString = 'mongodb://octave_user:#_Clobber8@ :48173,iad-c11-1.objectrocket.com:48173/db1'
var mongoose = require('mongoose');
mongoose.connect(mongoConnectionString);
var Schema = mongoose.Schema;

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
        res.send("These are the deals that were found" + dealFound);
      });
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
