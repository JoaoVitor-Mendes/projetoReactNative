'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      imagem: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.FLOAT
      },
      saldo: {
        type: Sequelize.INTEGER
      },
      colecaoId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'colecaos',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      tabelaPrecoId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tabelaprecos',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Produtos');
  }
};