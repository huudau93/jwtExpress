"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "UserApps",
      [
        {
          email: "kgvenusbn@gmail.com",
          password: "234567ytr",
          username: "huu dau",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "fake@gmail.com",
          password: "234567ytr",
          username: "fake 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "fake2@gmail.com",
          password: "234567ytr",
          username: "fake3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
