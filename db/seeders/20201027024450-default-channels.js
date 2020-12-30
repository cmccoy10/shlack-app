'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Channels', [
        {title: "project-phoenix", topic: "Share your progress and stay informed", ownerId: 2, createdAt: new Date(), updatedAt: new Date() },
        {title: "morning-standup", topic: "Morning Standup Meetings @ 8", ownerId: 2, createdAt: new Date(), updatedAt: new Date() },
        {title: "announcements", topic: "Announcements will be posted here first before emailed.", ownerId: 2, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Channels', null, {});
  }
};
