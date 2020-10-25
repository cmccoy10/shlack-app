'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pin = sequelize.define('Pin', {
    channelId: DataTypes.INTEGER,
    channelMessageId: DataTypes.INTEGER
  }, {});
  Pin.associate = function(models) {
    // associations can be defined here
  };
  return Pin;
};