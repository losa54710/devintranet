'use strict';

module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('Student',{
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    datebirth:{
      type: DataTypes.DATE,
      allowNull: false,
    }
    
  },{
    tableName: "students"
  });
  user.associate = function(models) {

  };
  return student;
};