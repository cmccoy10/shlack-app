'use strict';
module.exports = (sequelize, DataTypes) => {
  const DirectGroup = sequelize.define('DirectGroup', {
  }, {});
  DirectGroup.associate = function(models) {
    // associations can be defined here
  };
  return DirectGroup;
};
