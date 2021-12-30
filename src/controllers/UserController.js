const bcrypt = require('bcrypt');

module.exports = (app) => {
  const { User } = app.models;


  const save = async(req, res) => {
    let user = {...req.body };

    try {
      const save = await User.create(user);
      return res.json(save);
    } catch (err) {
      console.log(err)
      return res.status(400).json({ error: "Erro ao salvar usuário" })
    };
  };

  const list = async(req, res) => {
    const user = await User.findAll({
      //attributes: { exclude: ['password'] }
    });

    return res.json(user);
  };

  const search = async(req, res) => {
    const { user_id: id } = req.params;

    try {
      const user = User.findByPk(id);
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(404).json({ error: 'Usuário não encontrado' })
    }
  };

  const remove = async(req, res) => {
    const { user_id: id } = req.params;
    try {
      await User.destroy({
        where: { id }
      });
      return res.status(200).json({ success: "Sucesso ao remover usuário" })
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: "Erro ao remover usuário" })
    };

  };

  const update = async(req, res) => {
    const data = {...req.body };
    const { user_id: id } = req.params;

    try {
      const user = await User.findByPk(id);

      if (!user) {
        res.status(404).json({ error: 'User not found' });
      }

      const hashPassword = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
      data.password = hashPassword;

      const update = await User.update(data, {
        where: { id }
      });
      res.json(update);
    } catch (err) {
      res.status(400).json({ error: "Ocorreu um erro ao atualizar usuário" })
    };
  }
  return {
    save,
    list,
    remove,
    search,
    update
  }
}