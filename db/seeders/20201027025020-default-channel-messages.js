'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ChannelMessages', [
        {channelId: 1, userId: 6, body: "Just so everyone knows, I'm consolidating all of our ideas from yesterday's morning standup meeting.", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 4, body: "That's a great idea Sean!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 3, body: "Take a break everyone!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 7, body: "There are still a few issues that need to be done for the profile feature. I can pick them up if no one else planned on getting them.", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 5, body: "That would be great if you could! I am stuck on a bug preventing a component from rendering properly.", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 1, body: "Let me know if you need help. I can step away from my feature for a few minutes.", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 5, body: "Give me about 15 more minutes. I feel close to solving it! I'll let you know if I don't!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 4, body: "Has anyone run into this error when trying to heroku container:login?", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 4, body: "<3>init: (4007) ERROR: UtilConnectToInteropServer:300: connect failed 2 Error saving credentials: error storing credentials - err: exit status 1, out: ``", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 1, userId: 7, body: "Aaron, did you check to see if you are logged in to both Heroku and Docker?", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 7, body: "Good morning everyone!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 5, body: "Good morning!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 4, body: "Morning guys!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 6, body: "Hey Team!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 7, body: "I would love to know if anyone had any blockers from yesterday's work.", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 1, body: "I encountered a blocker when I was trying to cascade delete folders and files from Amazon S3 within a parent folder.", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 7, body: "Were you able to resolve this or do you need a teammate to look at it with you?", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 1, body: "I was able to resolve it by creating an algorithm that searched through the folders like a tree data structure. It works perfectly now!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 2, userId: 7, body: "Awesome! I'm glad to hear that!", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 3, userId: 7, body: "Everyone please make sure you are referencing wire frames that we went over last week.", createdAt: new Date(), updatedAt: new Date()},
        {channelId: 3, userId: 1, body: "We will be moving forward with the deployment of project-phoenix next Thursday. Everyone keep up the good work!", createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ChannelMessages', null, {});
  }
};
