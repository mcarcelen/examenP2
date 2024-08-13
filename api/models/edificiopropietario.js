'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edificiopropietario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  edificiopropietario.init({
    id_edificio: DataTypes.INTEGER,
    id_propietario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'edificiopropietario',
    tableName: 'edificiopropietarios'
  });
  return edificiopropietario;
};