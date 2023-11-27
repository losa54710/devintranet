'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const section = sequelize.define('Section', {
    desc: {
      types: DataTypes.STRING,
      allowNull: false
    }
  },{
    tableName: "sections"
  });

  section.associate = function(models){
    section.belongToMany(models.Degree, {as:"degrees" , through:"section_degree", foreignkey:"degreeId"});
  };

  return section;
};