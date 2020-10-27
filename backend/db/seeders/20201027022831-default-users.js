'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        { username: "cmccoy10", fullName: "Cole McCoy", email: "cole@mccoy.com", bio: "This is my bio", imgUrl: "https://miro.medium.com/fit/c/64/64/1*hLKzSxjViHNOYdum_hkmwg.jpeg", hashedPassword: "$2a$10$F5vxCw98ePQQvu6oDukzge6mReRa34Ip1qDDk5V52ErVB9vrPErxy", tokenId: "38c9e5bb-1800-465c-8222-e94ff0ca870e", createdAt: new Date(), updatedAt: new Date() },
        { username: "jsmith", fullName: "John Smith", email: "john@smith.com", bio: "My names john smith", imgUrl: "https://icon-library.com/images/generic-profile-icon/generic-profile-icon-8.jpg", hashedPassword: "$2a$10$F5vxCw98ePQQvu6oDukzge6mReRa34Ip1qDDk5V52ErVB9vrPErxy", tokenId: "38c9e5bb-1800-465c-8222-e94ff0ca870e", createdAt: new Date(), updatedAt: new Date() },
        { username: "jjones", fullName: "Jim Jones", email: "jim@jones.com", bio: "I'm Jim", imgUrl: "https://icon-library.com/images/generic-profile-icon/generic-profile-icon-8.jpg", hashedPassword: "$2a$10$F5vxCw98ePQQvu6oDukzge6mReRa34Ip1qDDk5V52ErVB9vrPErxy", tokenId: "38c9e5bb-1800-465c-8222-e94ff0ca870e", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
