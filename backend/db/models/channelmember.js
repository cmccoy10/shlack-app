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
  }, {});
  ChannelMember.associate = function(models) {
    ChannelMember.belongsTo(models.User, {
      foreignKey: "userId"
    })
    ChannelMember.belongsTo(models.Channel, {
      foreignKey: "channelId"
    })
  };
  return ChannelMember;
};
