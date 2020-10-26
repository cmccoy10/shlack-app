'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    channelMessageId: {
      type: DataTypes.INTEGER,
    },
    directMessageId: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING(300),
      allowNull: false,
    }
  }, {});
  Reply.associate = function(models) {
    Reply.belongsTo(models.ChannelMessage, {
      foreignKey: "channelMessageId"
    });

    Reply.belongsTo(models.User, {
      foreignKey: "userId"
    });

    Reply.belongsTo(models.DirectMessage, {
      foreignKey: "directMessageId"
    });
  };
  return Reply;
};
