'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChannelMessage = sequelize.define('ChannelMessage', {
    channelId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    body: DataTypes.STRING
  }, {});
  ChannelMessage.associate = function(models) {
    // associations can be defined here
  };
  return ChannelMessage;
};