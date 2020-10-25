'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reaction = sequelize.define('Reaction', {
    channelMessageId: DataTypes.INTEGER,
    directMessageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    unicode: DataTypes.STRING
  }, {});
  Reaction.associate = function(models) {
    // associations can be defined here
  };
  return Reaction;
};