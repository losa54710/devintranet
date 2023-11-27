'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const period = sequelize.define('Period',{
    year: {
      types: DataTypes.STRING,
      allowNull: false
    }
  },{
    TableName:"periods"
  })

  period.associate = function(models){
    
  }

  return period;
};