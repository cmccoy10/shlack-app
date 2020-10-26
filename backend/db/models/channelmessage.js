'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChannelMessage = sequelize.define('ChannelMessage', {
    channelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING(500),
      allowNull: false,
    }
  }, {});
  ChannelMessage.associate = function(models) {
    ChannelMessage.belongsTo(models.Channel, {
      foreignKey: "channelId"
    });

    ChannelMessage.belongsTo(models.User, {
      foreignKey: "userId"
    });

    ChannelMessage.belongsTo(models.Pin, {
      foreignKey: "channelMessageId"
    });

    ChannelMessage.hasMany(models.Reaction, {
      foreignKey: "channelMessageId"
    });

    ChannelMessage.hasMany(models.Reply, {
      foreignKey: "channelMessageId"
    });
  };
  return ChannelMessage;
};
