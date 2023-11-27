'use strict';

module.exports = (sequelize, DataTypes) => {

  const course = sequelize.define('Course',{
    name: {
      types: DataTypes.STRING,
      allowNull: true
    }
  },{
    tableName: "courses"
  });
  course.associate = function(models) {

  };
  
  
  return course;
};