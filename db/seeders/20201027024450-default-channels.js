'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Channels', [
        {title: "2020-07-13-circle-4", topic: "Circle 4!", ownerId: 1, createdAt: new Date(), updatedAt: new Date() },
        {title: "2020-07-13-online", topic: "July 2020 Cohort", ownerId: 1, createdAt: new Date(), updatedAt: new Date() },
        {title: "TheChosenOnes", topic: "Relax and chat", ownerId: 2, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Channels', null, {});
  }
};
