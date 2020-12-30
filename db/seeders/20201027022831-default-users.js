'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        { username: "cmccoy10", fullName: "Cole McCoy", email: "cole@mccoy.com", bio: "This is my bio", imgUrl: "https://miro.medium.com/fit/c/64/64/1*hLKzSxjViHNOYdum_hkmwg.jpeg", hashedPassword: "$2a$10$Xbl3Q61LNMproVmSgpNnjOE8HKvcKSeIWCLBe2UimJB/Q2SoNuy3m", tokenId: "38c9e5bb-1800-465c-8222-e94ff0ca870e", createdAt: new Date(), updatedAt: new Date() },
        { username: "demouser", fullName: "Demo User", email: "demo@example.com", bio: "I'm Demo", imgUrl: "https://icon-library.com/images/generic-profile-icon/generic-profile-icon-8.jpg", hashedPassword: "$2a$10$Xbl3Q61LNMproVmSgpNnjOE8HKvcKSeIWCLBe2UimJB/Q2SoNuy3m", tokenId: "38c9e5bb-1800-465c-8222-e94ff0ca870e", createdAt: new Date(), updatedAt: new Date() },
        { username: "sbot", fullName: "Shlackbot", email: "shlack@bot.com", bio: "shlackbot", imgUrl: "https://ca.slack-edge.com/T03GU501J-USLACKBOT-sv41d8cd98f0-512", hashedPassword: "$2a$10$Xbl3Q61LNMproVmSgpNnjOE8HKvcKSeIWCLBe2UimJB/Q2SoNuy3m", tokenId: "38c9e5bb-1800-465c-8222-e94ff0ca870e", createdAt: new Date(), updatedAt: new Date() },
        { username: "ajones", fullName: "Aaron Jones", email: "aaron@jones.com", bio: "I'm Aaron", imgUrl: "https://randomuser.me/api/portraits/men/32.jpg", hashedPassword: "$2a$10$Xbl3Q61LNMproVmSgpNnjOE8HKvcKSeIWCLBe2UimJB/Q2SoNuy3m", tokenId: "38c9e5bb-1800-465c-8222-e94ff0ca870e", createdAt: new Date(), updatedAt: new Date() },
        { username: "hriggs", fullName: "Henry Riggs", email: "henry@riggs.com", bio: "I'm Henry", imgUrl: "https://randomuser.me/api/portraits/men/44.jpg", hashedPassword: "$2a$10$Xbl3Q61LNMproVmSgpNnjOE8HKvcKSeIWCLBe2UimJB/Q2SoNuy3m", tokenId: "38c9e5bb-1800-465c-8222-e94ff0ca870e", createdAt: new Date(), updatedAt: new Date() },
        { username: "sbarber", fullName: "Sean Barber", email: "sean@barber.com", bio: "I'm Sean", imgUrl: "https://randomuser.me/api/portraits/men/49.jpg", hashedPassword: "$2a$10$Xbl3Q61LNMproVmSgpNnjOE8HKvcKSeIWCLBe2UimJB/Q2SoNuy3m", tokenId: "38c9e5bb-1800-465c-8222-e94ff0ca870e", createdAt: new Date(), updatedAt: new Date() },
        { username: "ajennings", fullName: "Ashley Jennings", email: "ashley@jennings.com", bio: "I'm Ashley", imgUrl: "https://randomuser.me/api/portraits/women/68.jpg", hashedPassword: "$2a$10$Xbl3Q61LNMproVmSgpNnjOE8HKvcKSeIWCLBe2UimJB/Q2SoNuy3m", tokenId: "38c9e5bb-1800-465c-8222-e94ff0ca870e", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
