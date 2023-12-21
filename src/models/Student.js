'use strict';

module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('Student',{
    studentId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
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
    },
    gender:{
      type: DataTypes.STRING,
      allowNull: false,
    }
    
  },{
    tableName: "students"
  });
  student.associate = function(models) {

  };
  return student;
};