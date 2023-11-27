'use strict';

module.exports = (sequelize, DataTypes) => {
  const unit = sequelize.define('Unit',{
    name: {
      types: DataTypes.STRING,
      allowNull: true
    }
  },{
    tableName: "units"
  });
  unit.associate = function(models) {
    unit.belongToMany(models.Course,{ as: "courses" ,through: "unit_course", foreignkey: "courseId" });
  };
  
  
  return unit;
};