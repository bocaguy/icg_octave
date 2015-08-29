"use strict"

module.exports = function(sequelize, DataTypes) 
{
  var Breach = sequelize.define('breaches', 
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'ID',
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING
      }
    }, 
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return Breach;
};