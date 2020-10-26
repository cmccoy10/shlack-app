'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    fullName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    }
  }, {});
  User.associate = function(models) {
    const columnMappingDG = {
      through: "GroupMember",
      otherKey: "directGroupId",
      foreignKey: "userId"
    }

    User.belongsToMany(models.DirectGroup, columnMappingDG);

    const columnMappingChannel = {
      through: "ChannelMember",
      otherKey: "channelId",
      foreignKey: "userId"
    }

    User.belongsToMany(models.Channel, columnMappingChannel);

    User.hasMany(models.DirectMessage, {
      foreignKey: "userId"
    });

    User.hasMany(models.Pin, {
      foreignKey: "userId"
    })

    User.hasMany(models.ChannelMessage, {
      foreignKey: "userId"
    })

    User.hasMany(models.Reaction, {
      foreignKey: "userId"
    })

    User.hasMany(models.Reply, {
      foreignKey: "userId"
    })
  };
  return User;
};
