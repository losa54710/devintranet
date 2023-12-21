'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const period = sequelize.define('Period',{
    periodId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    TableName:"periods"
  })

  period.associate = function(models){
    
  }

  return period;
};