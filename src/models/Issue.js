'use strict';

module.exports = (sequelize, DataTypes) => {
  const issue = sequelize.define('Issue',{
    desc : {
      type: DataTypes.STRING
    }
  },{
    tableName:"issues"
  });

  issue.associate = function(models){
    issue.belongsToMany(models.Unit,{ as:"units", through:"issue_unit", foreignKey:"unitId" })
  };

  return issue;
};