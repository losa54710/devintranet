'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const degree = sequelize.define('Degree',{
    desc: {
      types: DataTypes.STRING,
      allowNull: true
    }
  },{
    tableName: "degrees"
  });
  degree.associate = function(models){
    
  }

  return degree;
};