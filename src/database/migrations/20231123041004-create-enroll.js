'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enrolls', {
      enrollId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      desc: {
        type: Sequelize.STRING
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "students",
          key: "studentId"
        }
      },
      courseId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "courses",
          key: "courseId"
        }
      },
      periodId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "periods",
          key: "periodId"
        }
      },
      degreeId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "degrees",
          key: "degreeId"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('enrolls');
  }
};