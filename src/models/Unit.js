'use strict';

module.exports = (sequelize, DataTypes) => {
  const unit = sequelize.define('Unit',{
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },{
    tableName: "units"
  });
  unit.associate = function(models) {
    unit.belongsToMany(models.Course,{ as: "courses" ,through: "unit_course", foreignkey: "courseId" });
  };
  
  
  return unit;
};