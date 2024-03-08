"use strict";
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("./data/customer.json", "utf-8"));
    data.map((e) => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
      return e;
    });
    queryInterface.bulkInsert("Customers", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Customers", null);
  },
};
