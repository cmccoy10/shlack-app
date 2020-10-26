'use strict';
module.exports = (sequelize, DataTypes) => {
  const DirectGroup = sequelize.define('DirectGroup', {
  }, {});
  DirectGroup.associate = function(models) {
    const columnMapping = {
      through: "GroupMember",
      otherKey: "userId",
      foreignKey: "directGroupId"
    }

    DirectGroup.belongsToMany(models.User, columnMapping);

    DirectGroup.hasMany(models.DirectMessage, {
      foreignKey: "directGroupId"
    });
  };
  return DirectGroup;
};
