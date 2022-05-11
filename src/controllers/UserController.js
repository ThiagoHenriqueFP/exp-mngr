const bcrypt = require('bcrypt');

module.exports = (app) => {
  const { User, MensalExpense } = app.models;

  const save = async(req, res) => {
    const data = {...req.body };

    try {
      const check = await User.findOne({
        where: {
          login: data.login
        }
      });

      if (check) return res.status(400).json({ error: 'Usuário já existente' });
      if (data.password != data.password_check) return res.status(400).json({ error: "As senhas não correspondem" });

      const user = await User.create(data);
      const userValid = await User.findOne(data);

      if (!userValid) return res.status(404).json({ error: 'Usuário não encontrado' });

      await MensalExpense.create({ user_id: userValid.id });

      const query = await User.findByPk(user.id, {
        include: [{
          association: 'expenses'
        }]
      });

      return res.json(query);
    } catch (err) {
      console.log(err)
      return res.status(400).json({ error: "Erro ao salvar usuário" })
    }
  }

  const list = async(req, res) => {

    try {
      const user = await User.findAll({
        include: [{
          association: 'expenses'
        }],
        attributes: {
          exclude: ['password']
        }
      });

      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: 'Não foi possível listar os usuários' });
    }
  };

  const search = async(req, res) => {
    const { user_id: id } = req.params;

    try {
      const user = User.findByPk(id);
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(404).json({ error: 'Usuário não encontrado' })
    }
  };

  const remove = async(req, res) => {
    const { user_id: id } = req.params;
    try {
      const userExistis = await User.findByPk(id);
      if (!userExistis) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      await User.destroy({
        where: { id }
      });
      return res.status(200).json({ success: 'Sucesso ao remover usuário' });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: 'Erro ao remover usuário' });
    };

  };

  const update = async(req, res) => {
    const data = {...req.body };
    const { user_id: id } = req.params;

    try {
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const hashPassword = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
      data.password = hashPassword;

      const update = await User.update(data, {
        where: { id }
      });
      return res.json(update);
    } catch (err) {
      return res.status(400).json({ error: "Ocorreu um erro ao atualizar usuário" })
    };
  }
  return {
    save,
    list,
    remove,
    search,
    update,
  };
}