'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ChannelMembers', [
        {channelId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 7, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 3, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 3, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 3, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 3, userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 3, userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 3, userId: 6, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 3, userId: 7, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ChannelMembers', null, {});
  }
};
