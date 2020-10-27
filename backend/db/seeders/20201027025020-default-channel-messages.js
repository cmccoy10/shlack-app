'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ChannelMessages', [
        {channelId: 1, userId: 1, body: "This is a test message!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 1, body: "Another message", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 3, body: "Tired of seeing this?", createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ChannelMessages', null, {});
  }
};
