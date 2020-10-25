'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChannelMember = sequelize.define('ChannelMember', {
    channelId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  ChannelMember.associate = function(models) {
    // associations can be defined here
  };
  return ChannelMember;
};