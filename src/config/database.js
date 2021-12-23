require('dotenv/config');

exports.development = {
  user: process.env.USER,
  password: process.env.PASSWD,
  db_name: process.env.DB_NAME,
  db_port: process.env.DB_PORT || 5432,
  dialect: process.env.DIALECT || "postgres",
  define: {
    timestamps: true,
    underscored: true
  }
};

exports.production = {
  user: process.env.USER,
  password: process.env.PASSWD,
  db_name: process.env.DB_NAME,
  db_port: process.env.DB_PORT || 5432,
  dialect: process.env.DIALECT || "postgres",
  define: {
    timestamps: true,
    underscored: true
  }
};

exports.test = {
  user: process.env.USER,
  password: process.env.PASSWD,
  db_name: process.env.DB_NAME + '-test',
  db_port: process.env.DB_PORT || 5432,
  dialect: process.env.DIALECT || "postgres",
  define: {
    timestamps: true,
    underscored: true
  }
};