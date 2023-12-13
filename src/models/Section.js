'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const section = sequelize.define('Section', {
    desc: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    tableName: "sections"
  });

  section.associate = function(models){
    section.belongsToMany(models.Degree, {as:"degrees" , through:"section_degree", foreignkey:"degreeId"});
  };

  return section;
};