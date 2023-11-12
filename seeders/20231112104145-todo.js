'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", [
      {
        value: "Buy Egg",
        status: false,
      },
      {
        value: "Buy Milk",
        status: false,
      },
      {
        value: "Buy T-Shirt",
        status: false,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Todos", null, {});
  }
};
