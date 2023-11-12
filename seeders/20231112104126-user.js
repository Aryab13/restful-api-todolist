'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Alek Ambatukam",
        email: "alekambatukam@gmail.com",
        username: "alek",
        password: "123",
      },
      {
        name: "Gogon Tunjang",
        email: "gogontunjang@gmail.com",
        username: "gogon",
        password: "123",
      },
      {
        name: "Sigit Rendang",
        email: "sigitrendang@gmail.com",
        username: "sigit",
        password: "123",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
