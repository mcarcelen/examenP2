'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('edificios', [
        {
          id: 1,
          nombre: "Condominio Zed",
          numpisos: 3,
          direccion: "Direccion 1",
          avaluo: "$24500",
          id_propietario: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          nombre: "Condominio Feliz Alma",
          numpisos: 2,
          direccion: "Direccion 2",
          avaluo: "$30700",
          id_propietario: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          nombre: "Residencia Arkham",
          numpisos: 4,
          direccion: "Direccion 3",
          avaluo: "$90000",
          id_propietario: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          nombre: "Villa Buena",
          numpisos: 1,
          direccion: "Direccion 4",
          avaluo: "$11000",
          id_propietario: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          nombre: "Villa Santana",
          numpisos: 3,
          direccion: "Direccion 5",
          avaluo: "$46000",
          id_propietario: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('edificios', null, {});
  }
};
