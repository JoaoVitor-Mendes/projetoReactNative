'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Representante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Representante.belongsTo(models.Usuario);
      Representante.belongsTo(models.Empresa);
      Representante.belongsTo(models.Venda);
    }
  };
  Representante.init({
    nome: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER,
    empresaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Representante',
  });
  return Representante;
};