'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colecao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Colecao.hasMany(models.Produto);
    }
  };
  Colecao.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Colecao',
  });
  return Colecao;
};