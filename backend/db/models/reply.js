'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    channelMessageId: DataTypes.INTEGER,
    directMessageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    body: DataTypes.STRING
  }, {});
  Reply.associate = function(models) {
    // associations can be defined here
  };
  return Reply;
};