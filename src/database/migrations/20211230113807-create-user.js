'use strict';

module.exports = {
  up: async(queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      wage: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      login: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING(30),
        allowNull: false,
      }
    });
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};