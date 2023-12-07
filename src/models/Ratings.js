'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ratings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ratings.init({
    q1: DataTypes.FLOAT,
    q2: DataTypes.FLOAT,
    q3: DataTypes.FLOAT,
    average: DataTypes.FLOAT,
    unitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ratings',
  });
  return Ratings;
};