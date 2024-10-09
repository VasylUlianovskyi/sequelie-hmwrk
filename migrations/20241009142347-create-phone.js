'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      brand: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      os: {
        type: Sequelize.STRING,
      },
      screen_size: {
        type: Sequelize.FLOAT,
      },
      ram: {
        type: Sequelize.INTEGER,
      },
      storage_capacity: {
        type: Sequelize.INTEGER,
      },
      battery_capacity: {
        type: Sequelize.INTEGER,
      },
      camera_megapixels: {
        type: Sequelize.FLOAT,
      },
      price: {
        type: Sequelize.DECIMAL,
      },
      release_date: {
        type: Sequelize.DATE,
      },
      color: {
        type: Sequelize.STRING,
      },
      is_dual_sim: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Phones');
  },
};
