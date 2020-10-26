'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChannelModerators = sequelize.define('ChannelModerators', {
    channelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  ChannelModerators.associate = function(models) {
    // associations can be defined here
  };
  return ChannelModerators;
};
