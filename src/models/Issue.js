'use strict';

module.exports = (sequelize, DataTypes) => {
  const issue = sequelize.define('Issue',{
    desc : {
      types: DataTypes.STRING
    }
  },{
    tableName:"issues"
  });

  issue.associate = function(models){
    issue.belongToMany(models.Unit,{ as:"units", through:"issue_unit", foreignKey:"unitId" })
  };

  return issue;
};