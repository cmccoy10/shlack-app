'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Pins', [
        {channelId: 1, channelMessageId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, channelMessageId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Pins', null, {});
  }
};
