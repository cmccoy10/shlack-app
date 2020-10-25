'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupMember = sequelize.define('GroupMember', {
    directGroupId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  GroupMember.associate = function(models) {
    // associations can be defined here
  };
  return GroupMember;
};