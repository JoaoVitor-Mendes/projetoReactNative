'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produto.belongsTo(models.TabelaPreco);
      Produto.belongsTo(models.Colecao);
      Produto.belongsTo(models.Venda);
    }
  };
  Produto.init({
    nome: DataTypes.STRING,
    imagem: DataTypes.STRING,
    descricao: DataTypes.STRING,
    status: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    saldo: DataTypes.FLOAT,
    colecaoId: DataTypes.INTEGER,
    tabelaPrecoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};