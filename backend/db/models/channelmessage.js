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

    ChannelMessage.hasOne(models.Pin, {
      foreignKey: "channelMessageId",
      onDelete: "CASCADE",
      hooks: true,
    });

    ChannelMessage.hasMany(models.Reaction, {
      foreignKey: "channelMessageId",
      onDelete: "CASCADE",
      hooks: true,
    });

    ChannelMessage.hasMany(models.Reply, {
      foreignKey: "channelMessageId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return ChannelMessage;
};
