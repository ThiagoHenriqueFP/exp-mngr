const { Sequelize } = require('sequelize');

module.exports = (app) => {
  const {
    save,
    list,
    remove
  } = app.controllers.UserController;

  app
    .route('/users')
    .get(list)

  app
    .route('/users/')
    .post(save)

  app
    .route('/users/:id')
    .delete(remove)
}