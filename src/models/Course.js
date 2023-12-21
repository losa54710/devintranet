'use strict';

module.exports = (sequelize, DataTypes) => {

  const course = sequelize.define('Course', {
    courseId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: "courses"
  });
  course.associate = function (models) {

  };


  return course;
};