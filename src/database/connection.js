require('dotenv/config');
const { Sequelize } = require('sequelize');
/* const config = require('../config/database') */
const { development, production, test } = require('../config/database');

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
};

const connection = new Sequelize(config);

module.exports = connection;