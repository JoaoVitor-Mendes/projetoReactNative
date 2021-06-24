'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      valorTotal: {
        type: Sequelize.FLOAT
      },
      produtoId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'produtos',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'        
      },
      representanteId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'representantes',
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
    await queryInterface.dropTable('Vendas');
  }
};