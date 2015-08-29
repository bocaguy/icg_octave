"use strict";


var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
//var configJSON  = require(__dirname + '/../config/config.json');
//console.log(configJSON.development);
var config    = require(__dirname + '/../config/config.json')[env];
//var config    = require('/config/config.json')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db  = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js") && (file !== "user_models.js") && (file !== "db.development.sqlite");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

/*
console.log("Authenticating...");
var authresults = sequelize.authenticate().then(function(err) 
  {
      console.log("Authentication Results...");
      if (err) {
        console.log('Authentication Error:', err)
      } 
      else 
      {
        console.log('Authentication Successful');
      }
  }
);
*/