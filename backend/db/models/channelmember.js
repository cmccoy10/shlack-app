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
    }
  }, {});
  ChannelMember.associate = function(models) {

  };
  return ChannelMember;
};
