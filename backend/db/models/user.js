'use strict';
const bcrypt = require('bcryptjs');
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
    bio: {
      type: DataTypes.STRING(200),
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
    tokenId: {
      type: DataTypes.STRING
    }
  }, {});
  User.associate = function(models) {
    User.prototype.isValid = () => true;

    User.prototype.setPassword = function (password) {
      this.hashedPassword = bcrypt.hashSync(password, 10);
      return this;
    };

    User.prototype.isValidPassword = function (password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    };

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

    // TODO: Customize the Safe Object for JWT if needed
    User.prototype.toSafeObject = function () {
      return {
        createdAt: this.createdAt,
        email: this.email,
        id: this.id,
        name: this.name,
        updatedAt: this.updatedAt,
      };
    };
  };
  return User;
};
