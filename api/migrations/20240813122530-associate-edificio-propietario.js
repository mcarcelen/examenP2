'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('edificiopropietarios', {
      fields: ['id_edificio'],
      name: 'id_edificio_fk',
      type: 'foreign key',
      references: {
      table: 'edificios',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
      await queryInterface.addConstraint('edificiopropietarios', {
      fields: ['id_propietario'],
      name: 'id_propietario_fk',
      type: 'foreign key',
      references: {
      table: 'propietarios',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('UsuariosPerfiles', 'id_edificio');
    await queryInterface.removeConstraint('UsuariosPerfiles', 'id_propietario');
  }
};
