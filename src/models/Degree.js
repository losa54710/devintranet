'use strict';

module.exports = (sequelize, DataTypes) => {

  const degree = sequelize.define('Degree', {
    degreeId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: "degrees"
  });
  degree.associate = function (models) {

  }

  return degree;
};