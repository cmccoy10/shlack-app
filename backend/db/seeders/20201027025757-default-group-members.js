'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('GroupMembers', [
        {directGroupId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {directGroupId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {directGroupId: 2, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {directGroupId: 2, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {directGroupId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('GroupMembers', null, {});
  }
};
