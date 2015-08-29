"use strict"
var bcrypt   = require('bcrypt-nodejs');
module.exports = function(sequelize, DataTypes) 
{
  var User = sequelize.define('users', 
    {
      email: {
        type: DataTypes.STRING,
        field: 'email'
      },
      hashed_password: {
        type: DataTypes.STRING
      }
    }, 
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return User;
};