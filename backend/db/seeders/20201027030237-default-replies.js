'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Replies', [
        {channelMessageId: 1, directMessageId: null, userId: 3, body: "This is a reply!", createdAt: new Date(), updatedAt: new Date()},
        {channelMessageId: null, directMessageId: 1, userId: 3, body: "This is a reply on a DM!", createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Replies', null, {});
  }
};
