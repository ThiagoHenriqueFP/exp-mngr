const { Sequelize } = require('sequelize');

module.exports = (app) => {
  const {
    save,
    list,
    search,
    remove,
    update,
    test
  } = app.controllers.UserController;

  app
    .route('/users')
    .get(list);

  app
    .route('/users/')
    .post(save);

  app
    .route('/users/:user_id')
    .delete(remove);

  app
    .route('/users/:user_id')
    .put(update);

  app
    .route('/users/:user_id')
    .get(search);

  /*   app
      .route('/users/test')
      .post(test); */
}