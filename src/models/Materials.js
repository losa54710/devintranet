'use strict';

module.exports = (sequelize, DataTypes) => {
  const material = sequelize.define('Material',{
    name: {
      types: DataTypes.STRING,
      allowNull: true
    },
    file: {
      types: DataTypes.BLOB,
      allowNull: true
    }
  },{
    tableName: "materials"
  });
  material.associate = function(models) {
    material.belongToMany(models.Material,{ as: "materials" ,through: "issue_material", foreignkey: "issueId" });
  };
  return material;
};