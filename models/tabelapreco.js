'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TabelaPreco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TabelaPreco.hasMany(models.Produto);
    }
  };
  TabelaPreco.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TabelaPreco',
  });
  return TabelaPreco;
};