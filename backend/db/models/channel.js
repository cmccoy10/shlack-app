'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    title: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    topic: {
      type: DataTypes.STRING(200),
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Channel.associate = function(models) {
    Channel.hasMany(models.Pin, {
      foreignKey: "channelId"
    });
    const columnMapping = {
      through: "ChannelMember",
      otherKey: "userId",
      foreignKey: "channelId"
    };
    Channel.belongsToMany(models.User, columnMapping);

    Channel.hasMany(models.ChannelMessage, {
      foreignKey: "channelId"
    });

    Channel.belongsTo(models.User, {
      foreignKey: "ownerId"
    });
  };
  return Channel;
};
