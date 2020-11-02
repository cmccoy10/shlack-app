'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ChannelMessages', [
        {channelId: 1, userId: 1, body: "I really like this chat app!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 5, body: "Yeah Shlack is great!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 4, body: "I wonder what all features will be coming?", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 1, body: "I don't know, but I can't wait!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 5, body: "Did you notice you can add more members?", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 7, body: "Just added Sean to the Channel.", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 6, body: "What's going on guys?", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 3, body: "Break Time!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 3, body: "Try deleting this channel!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 3, userId: 3, body: "Try this one instead!", createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ChannelMessages', null, {});
  }
};
