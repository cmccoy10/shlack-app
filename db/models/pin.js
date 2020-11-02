'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pin = sequelize.define('Pin', {
    channelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    channelMessageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Pin.associate = function(models) {
    Pin.belongsTo(models.Channel, {
      foreignKey: "channelId"
    });

    Pin.belongsTo(models.User, {
      foreignKey: "userId"
    });

    Pin.belongsTo(models.ChannelMessage, {
      foreignKey: "channelMessageId"
    });
  };
  return Pin;
};
