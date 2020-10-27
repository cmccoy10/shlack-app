'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChannelMember = sequelize.define('ChannelMember', {
    channelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    owner: {
      type: DataTypes.BOOLEAN
    },
  }, {});
  ChannelMember.associate = function(models) {

  };
  return ChannelMember;
};
