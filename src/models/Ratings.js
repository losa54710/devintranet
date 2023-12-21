'use strict';

module.exports = (sequelize, DataTypes) => {
  const rating = sequelize.define('Rating',{
    ratingId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    q1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    q2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    q3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    average: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  },{
    tableName: "ratings"
  });
  rating.associate = function(models) {
    rating.belongsToMany(models.Rating,{ as: "ratings" ,through: "unit_rating", foreignkey: "unitId" });
  };
  return rating;
};