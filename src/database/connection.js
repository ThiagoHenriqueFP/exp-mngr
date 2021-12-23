const { Sequelize } = require('sequelize');
const { development, production, test } = require('../config/database')

let config;

switch (process.env.NODE_ENV) {
  case 'production':
    config = production;
    break;
  case 'test':
    config = test;
    break;
  default:
    config = development;
    break;
}

const connection = new Sequelize(config);
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log(`Connected to ${process.env.DB_NAME}`)
  } catch (error) {
    console.log(`Error connecting to ${process.env.DB_NAME}`)
  }
};

testConnection();

module.exports = connection;