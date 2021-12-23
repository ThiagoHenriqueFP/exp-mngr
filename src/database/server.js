const connection = require('./connection');

module.exports = (app) => {
  const {
    User,
    Debt,
    MensalExpense
  } = app.models;

  User.init(connection);
  Debt.init(connection);
  MensalExpense.init(connection);

  User.associate(connection.models);
  /* Debt.associate(connection.models); */
  MensalExpense.associate(connection.models);

  return connection;
}