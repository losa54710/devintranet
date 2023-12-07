'use strict';

module.exports = (sequelize, DataTypes) => {
  const rating = sequelize.define('Rating',{
    q1: {
      types: DataTypes.FLOAT,
      allowNull: true
    },
    q2: {
      types: DataTypes.FLOAT,
      allowNull: true
    },
    q3: {
      types: DataTypes.FLOAT,
      allowNull: true
    },
    average: {
      types: DataTypes.FLOAT,
      allowNull: true
    }
  },{
    tableName: "ratings"
  });
  rating.associate = function(models) {
    rating.belongToMany(models.Rating,{ as: "ratings" ,through: "unit_rating", foreignkey: "unitId" });
  };
  return Ratings;
};