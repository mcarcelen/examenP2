'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edificios extends Model {
    
    static associate(models) {
      models.edificios.belongsToMany(models.propietario, { through:'edificiopropietarios', foreignKey: "id_propietario" } );
    }
  }
  edificios.init({
    nombre: DataTypes.STRING,
    numpisos: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    avaluo: DataTypes.STRING,
    id_propietario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'edificios',
    tableName:'edificios'
  });
  return edificios;
};