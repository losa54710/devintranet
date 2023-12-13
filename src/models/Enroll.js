'use strict';

module.exports = (sequelize, DataTypes) => {
  const enroll = sequelize.define('Enroll', {
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: "enrolls"
  });
  enroll.associate = function (models) {
    enroll.belongsToMany(models.Student, { as: "students", through: "enroll_student", foreignkey: "studentId" });
    enroll.belongsToMany(models.Course, { as: "courses", through: "enroll_courses", foreignkey: "courseId" });
    enroll.belongsToMany(models.Degree, { as: "degrees", through: "enroll_degrees", foreignkey: "degreeId" });
    enroll.belongsToMany(models.Period, { as: "periods", through: "enroll_period", foreignkey: "periodId" });
  };
  return enroll;
};