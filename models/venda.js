'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Venda.hasMany(models.Produto);
      Venda.hasMany(models.Representante);
    }
  };
  Venda.init({
    data: DataTypes.DATE,
    quantidade: DataTypes.INTEGER,
    valorTotal: DataTypes.FLOAT,
    produtoId: DataTypes.INTEGER,
    representanteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Venda',
  });
  return Venda;
};