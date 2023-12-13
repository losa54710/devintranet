'use strict';

module.exports = (sequelize, DataTypes) => {
  const material = sequelize.define('Material',{
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    file: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  },{
    tableName: "materials"
  });
  material.associate = function(models) {
    material.belongsToMany(models.Material,{ as: "materials" ,through: "issue_material", foreignkey: "issueId" });
  };
  return material;
};