module.exports = (app) => {
  const { User } = app.models;


  const save = async(req, res) => {
    let user = {...req.body };

    //const { first_name, last_name, wage, login, password } = req.body;
    try {
      const save = await User.create(user);
      return res.json(save);
    } catch (err) {
      return res.status(400).json({ error: "Erro ao salvar usuário" })
    }
  }

  const list = async(req, res) => {
    const user = await User.findAll();

    return res.json(user);
  }

  const remove = async(req, res) => {
    const { id } = req.params;
    try {
      /* const user = await User.findByPk(id);
      res.json(user); */
      await User.destroy({
        where: { id }
      });
      return res.status(200).json({ success: "Sucesso ao remover usuário" })
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: "Erro ao remover usuário" })
    }

  }

  return {
    save,
    list,
    remove
  }
}