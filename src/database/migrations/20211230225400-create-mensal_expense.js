'use strict';

module.exports = {
  up: async(queryInterface, DataTypes) => {
    await queryInterface.createTable('mensal_expense', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      value: {
        type: DataTypes.INTEGER,
      },
      settled: {
        type: DataTypes.INTEGER,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    })

  },

  down: async(queryInterface, DataTypes) => {

    await queryInterface.dropTable('mensal_expense');

  }
};