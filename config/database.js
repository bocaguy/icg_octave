// DATABASE CONNECTION STRINGS: (MongoDB)

//var mongoConnTest = "mongodb://octave_user:#_Clobber8@iad-c11-0.objectrocket.com:48173,iad-c11-1.objectrocket.com:48173/db1";
var mongoConnTest = 'mongodb://heroku_gmjhjm33:12jbre09t6k27cf262rs2faq1c@ds063892.mongolab.com:63892/heroku_gmjhjm33';

var mongoConnProd = process.env.MONGOHQ_URL;
var connectionString;
var dbServer;

if (mongoConnProd) 
{
  connectionString = mongoConnProd;
  dbServer = 'Prod';
}
else 
{
  connectionString = mongoConnTest;
  dbServer = 'Test';
}

module.exports = 
{
    'connectionString'  : connectionString,
    'dbServer' : dbServer
};
