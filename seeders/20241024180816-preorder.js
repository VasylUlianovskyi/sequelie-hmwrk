'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Preorders', [
      {
        phoneId: 7,
        customerName: 'Іван Іванов',
        customerPhone: '+380123456789',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phoneId: 3,
        customerName: 'Петро Петров',
        customerPhone: '+380987654321',
        status: 'confirmed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phoneId: 3,
        customerName: 'Олена Олененко',
        customerPhone: '+380555555555',
        status: 'done',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phoneId: 6,
        customerName: 'Анна Анненко',
        customerPhone: '+380111222333',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phoneId: 8,
        customerName: 'Сергій Сергієнко',
        customerPhone: '+380444555666',
        status: 'confirmed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phoneId: 7,
        customerName: 'Марія Марченко',
        customerPhone: '+380777888999',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phoneId: 12,
        customerName: 'Василь Васильченко',
        customerPhone: '+380222333444',
        status: 'done',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phoneId: 10,
        customerName: 'Олександр Олександров',
        customerPhone: '+380555666777',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phoneId: 1,
        customerName: 'Тетяна Тетяненко',
        customerPhone: '+380888999000',
        status: 'confirmed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phoneId: 1,
        customerName: 'Юрій Юрченко',
        customerPhone: '+380333444555',
        status: 'done',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Preorders', null, {});
  },
};
