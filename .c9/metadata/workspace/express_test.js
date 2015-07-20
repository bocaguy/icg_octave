{"filter":false,"title":"express_test.js","tooltip":"/express_test.js","undoManager":{"mark":76,"position":76,"stack":[[{"start":{"row":0,"column":0},"end":{"row":14,"column":0},"action":"remove","lines":["var express = require(\"express\");","var logfmt = require(\"logfmt\");","var app = express();","","app.use(logfmt.requestLogger());","","app.get('/', function(req, res) {","  res.send('Application Settings: ' + app.settings.env);","});","","var port = Number(process.env.PORT || 5000);","app.listen(port, function() {","  console.log(\"Listening on \" + port);","});",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":42,"column":0},"action":"insert","lines":["","var express = require(\"express\");","//var logfmt = require(\"logfmt\");","var app = express();","","//app.use(logfmt.requestLogger());","","","","","//var http = require('http');","var mongoConnectionString = 'mongodb://octave_user:#_Clobber8@ :48173,iad-c11-1.objectrocket.com:48173/db1'","","// Mongoose","","var mongoose = require('mongoose');","mongoose.connect(mongoConnectionString);","var Schema = mongoose.Schema;","","var schemaDealInfo = new Schema({","  Client: String,","  Deal: String,","  LoanCount: Number","}, ","  { collection : 'DealInfo' }",");","","var deal = mongoose.model('DealInfo', schemaDealInfo);","","app.get('/', function(req, res) ","{","      deal.find({ Deal: 'ACE' }, function(err, dealFound) ","      {","        if (err) throw err;","        res.send(dealFound);","      });","});","","var port = Number(process.env.PORT || 5000);","app.listen(port, function() {","  console.log(\"Listening on \" + port);","});",""]}],[{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"remove","lines":["i"],"id":3}],[{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["i"],"id":4}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":5}],[{"start":{"row":5,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["","","",""],"id":6}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["//app.use(logfmt.requestLogger());",""],"id":7}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["//app.use(logfmt.requestLogger());",""],"id":8}],[{"start":{"row":1,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["//var logfmt = require(\"logfmt\");","//app.use(logfmt.requestLogger());",""],"id":9}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["//var http = require('http');",""],"id":10},{"start":{"row":4,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["//var logfmt = require(\"logfmt\");","//app.use(logfmt.requestLogger());",""]}],[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":11}],[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["var mongoConnectionString = 'mongodb://octave_user:#_Clobber8@ :48173,iad-c11-1.objectrocket.com:48173/db1'",""],"id":12}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"insert","lines":["var mongoConnectionString = 'mongodb://octave_user:#_Clobber8@ :48173,iad-c11-1.objectrocket.com:48173/db1'",""],"id":13}],[{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"remove","lines":["",""],"id":14}],[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"remove","lines":["",""],"id":15}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":16}],[{"start":{"row":27,"column":17},"end":{"row":27,"column":18},"action":"insert","lines":["\""],"id":18}],[{"start":{"row":27,"column":18},"end":{"row":27,"column":19},"action":"insert","lines":["T"],"id":19}],[{"start":{"row":27,"column":19},"end":{"row":27,"column":20},"action":"insert","lines":["h"],"id":20}],[{"start":{"row":27,"column":20},"end":{"row":27,"column":21},"action":"insert","lines":["e"],"id":21}],[{"start":{"row":27,"column":21},"end":{"row":27,"column":22},"action":"insert","lines":["s"],"id":22}],[{"start":{"row":27,"column":22},"end":{"row":27,"column":23},"action":"insert","lines":["e"],"id":23}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":[" "],"id":24}],[{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"insert","lines":["a"],"id":25}],[{"start":{"row":27,"column":25},"end":{"row":27,"column":26},"action":"insert","lines":["r"],"id":26}],[{"start":{"row":27,"column":26},"end":{"row":27,"column":27},"action":"insert","lines":["e"],"id":27}],[{"start":{"row":27,"column":27},"end":{"row":27,"column":28},"action":"insert","lines":[" "],"id":28}],[{"start":{"row":27,"column":28},"end":{"row":27,"column":29},"action":"insert","lines":["t"],"id":29}],[{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"insert","lines":["h"],"id":30}],[{"start":{"row":27,"column":30},"end":{"row":27,"column":31},"action":"insert","lines":["e"],"id":31}],[{"start":{"row":27,"column":31},"end":{"row":27,"column":32},"action":"insert","lines":[" "],"id":32}],[{"start":{"row":27,"column":32},"end":{"row":27,"column":33},"action":"insert","lines":["d"],"id":33}],[{"start":{"row":27,"column":33},"end":{"row":27,"column":34},"action":"insert","lines":["e"],"id":34}],[{"start":{"row":27,"column":34},"end":{"row":27,"column":35},"action":"insert","lines":["a"],"id":35}],[{"start":{"row":27,"column":35},"end":{"row":27,"column":36},"action":"insert","lines":["l"],"id":36}],[{"start":{"row":27,"column":36},"end":{"row":27,"column":37},"action":"insert","lines":["s"],"id":37}],[{"start":{"row":27,"column":37},"end":{"row":27,"column":38},"action":"insert","lines":[" "],"id":38}],[{"start":{"row":27,"column":38},"end":{"row":27,"column":39},"action":"insert","lines":["t"],"id":39}],[{"start":{"row":27,"column":39},"end":{"row":27,"column":40},"action":"insert","lines":["h"],"id":40}],[{"start":{"row":27,"column":40},"end":{"row":27,"column":41},"action":"insert","lines":["a"],"id":41}],[{"start":{"row":27,"column":41},"end":{"row":27,"column":42},"action":"insert","lines":["t"],"id":42}],[{"start":{"row":27,"column":42},"end":{"row":27,"column":43},"action":"insert","lines":[" "],"id":43}],[{"start":{"row":27,"column":43},"end":{"row":27,"column":44},"action":"insert","lines":["w"],"id":44}],[{"start":{"row":27,"column":44},"end":{"row":27,"column":45},"action":"insert","lines":["e"],"id":45}],[{"start":{"row":27,"column":45},"end":{"row":27,"column":46},"action":"insert","lines":["r"],"id":46}],[{"start":{"row":27,"column":46},"end":{"row":27,"column":47},"action":"insert","lines":["e"],"id":47}],[{"start":{"row":27,"column":47},"end":{"row":27,"column":48},"action":"insert","lines":[" "],"id":48}],[{"start":{"row":27,"column":48},"end":{"row":27,"column":49},"action":"insert","lines":["f"],"id":49}],[{"start":{"row":27,"column":49},"end":{"row":27,"column":50},"action":"insert","lines":["o"],"id":50}],[{"start":{"row":27,"column":50},"end":{"row":27,"column":51},"action":"insert","lines":["u"],"id":51}],[{"start":{"row":27,"column":51},"end":{"row":27,"column":52},"action":"insert","lines":["n"],"id":52}],[{"start":{"row":27,"column":52},"end":{"row":27,"column":53},"action":"insert","lines":["d"],"id":53}],[{"start":{"row":27,"column":53},"end":{"row":27,"column":54},"action":"insert","lines":["\""],"id":54}],[{"start":{"row":27,"column":54},"end":{"row":27,"column":55},"action":"insert","lines":[" "],"id":55}],[{"start":{"row":27,"column":55},"end":{"row":27,"column":56},"action":"insert","lines":["+"],"id":56}],[{"start":{"row":27,"column":56},"end":{"row":27,"column":57},"action":"insert","lines":[" "],"id":57}],[{"start":{"row":36,"column":0},"end":{"row":36,"column":73},"action":"insert","lines":["git push git@github.com:[your_git_accountname]/[your_git_name].git master"],"id":58}],[{"start":{"row":36,"column":0},"end":{"row":36,"column":73},"action":"remove","lines":["git push git@github.com:[your_git_accountname]/[your_git_name].git master"],"id":59}],[{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"remove","lines":["",""],"id":60}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":73},"action":"insert","lines":["git push git@github.com:[your_git_accountname]/[your_git_name].git master"],"id":61}],[{"start":{"row":35,"column":24},"end":{"row":35,"column":46},"action":"remove","lines":["[your_git_accountname]"],"id":62},{"start":{"row":35,"column":24},"end":{"row":35,"column":25},"action":"insert","lines":["b"]}],[{"start":{"row":35,"column":25},"end":{"row":35,"column":26},"action":"insert","lines":["o"],"id":63}],[{"start":{"row":35,"column":26},"end":{"row":35,"column":27},"action":"insert","lines":["c"],"id":64}],[{"start":{"row":35,"column":27},"end":{"row":35,"column":28},"action":"insert","lines":["a"],"id":65}],[{"start":{"row":35,"column":28},"end":{"row":35,"column":29},"action":"insert","lines":["g"],"id":66}],[{"start":{"row":35,"column":29},"end":{"row":35,"column":30},"action":"insert","lines":["u"],"id":67}],[{"start":{"row":35,"column":30},"end":{"row":35,"column":31},"action":"insert","lines":["y"],"id":68}],[{"start":{"row":35,"column":32},"end":{"row":35,"column":47},"action":"remove","lines":["[your_git_name]"],"id":69},{"start":{"row":35,"column":32},"end":{"row":35,"column":33},"action":"insert","lines":["i"]}],[{"start":{"row":35,"column":33},"end":{"row":35,"column":34},"action":"insert","lines":["c"],"id":70}],[{"start":{"row":35,"column":34},"end":{"row":35,"column":35},"action":"insert","lines":["g"],"id":71}],[{"start":{"row":35,"column":35},"end":{"row":35,"column":36},"action":"insert","lines":["_"],"id":72}],[{"start":{"row":35,"column":36},"end":{"row":35,"column":37},"action":"insert","lines":["o"],"id":73}],[{"start":{"row":35,"column":37},"end":{"row":35,"column":38},"action":"insert","lines":["c"],"id":74}],[{"start":{"row":35,"column":38},"end":{"row":35,"column":39},"action":"insert","lines":["t"],"id":75}],[{"start":{"row":35,"column":39},"end":{"row":35,"column":40},"action":"insert","lines":["a"],"id":76}],[{"start":{"row":35,"column":40},"end":{"row":35,"column":41},"action":"insert","lines":["v"],"id":77}],[{"start":{"row":35,"column":41},"end":{"row":35,"column":42},"action":"insert","lines":["e"],"id":78}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":53},"action":"remove","lines":["git push git@github.com:bocaguy/icg_octave.git master"],"id":79}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":35,"column":0},"end":{"row":35,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1437379807856,"hash":"25dd7d3b2559bf49a3ec9d699597f8356ed9e2c4"}