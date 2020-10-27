'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('DirectMessages', [
        {directGroupId: 1, userId: 1, body: "I love being in group 1!", createdAt: new Date(), updatedAt: new Date()},
        {directGroupId: 1, userId: 3, body: "Me too!", createdAt: new Date(), updatedAt: new Date()},
        {directGroupId: 2, userId: 3, body: "Anyone here??", createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('DirectMessages', null, {});
  }
};
