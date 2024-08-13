'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class propietario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.propietario.belongsToMany(models.edificios, { through:'edificiopropietarios', foreignKey: "id_edificio" } );
    }
  }
  propietario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'propietario',
    tableName: 'propietarios'
  });
  return propietario;
};