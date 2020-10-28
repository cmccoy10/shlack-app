'use strict';
module.exports = (sequelize, DataTypes) => {
  const DirectMessage = sequelize.define('DirectMessage', {
    directGroupId: {
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
  DirectMessage.associate = function(models) {
    DirectMessage.hasMany(models.Reply, {
      foreignKey: "channelMessageId",
      onDelete: "CASCADE",
      hooks: true,
    });

    DirectMessage.hasMany(models.Reaction, {
      foreignKey: "channelMessageId",
      onDelete: "CASCADE",
      hooks: true,
    });

    DirectMessage.belongsTo(models.DirectGroup, {
      foreignKey: "directGroupId"
    });

    DirectMessage.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };
  return DirectMessage;
};
