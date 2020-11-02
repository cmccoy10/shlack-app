'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reaction = sequelize.define('Reaction', {
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
    unicodeVal: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Reaction.associate = function(models) {
    Reaction.belongsTo(models.ChannelMessage, {
      foreignKey: "channelMessageId"
    });

    Reaction.belongsTo(models.User, {
      foreignKey: "userId"
    });

    Reaction.belongsTo(models.DirectMessage, {
      foreignKey: "directMessageId"
    });
  };
  return Reaction;
};
