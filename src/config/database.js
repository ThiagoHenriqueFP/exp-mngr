require('dotenv/config');

exports.development = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  define: {
    timestamps: true,
    underscored: true
  }
};

exports.production = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true
  }
};

exports.test = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME + '-test',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  define: {
    timestamps: true,
    underscored: true
  }
};