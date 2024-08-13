'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('propietarios', [
      {
        id: 1,
        nombre: "Juan",
        apellido: "Suarez",
        estado: "Inquilino",
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        nombre: "Paula",
        apellido: "Lopez",
        estado: "Residente",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        nombre: "Sam",
        apellido: "Wilson",
        estado: "Residente",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        nombre: "Guillermo",
        apellido: "Ruiz",
        estado: "Residente",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        nombre: "Laura",
        apellido: "Ortega",
        estado: "Inquilino",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('propietarios', null, {});
  }
};
