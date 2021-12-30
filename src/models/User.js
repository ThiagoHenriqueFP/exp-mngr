const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {
  static init(connection) {
    super.init({
      first_name: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      wage: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      login: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING(30),
        allowNull: false
          /* set(value) {
            bcrypt.hash(value, 10, (error, hash) => {
              if (error) { throw new Error(error); }
              return hash
            });
          } */
      }
    }, {
      sequelize: connection,
      modelName: 'user',
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    });
  }
  static associate(models) {
    this.hasOne(models.mensalexpense, { foreignKey: 'id' });
  }
};


module.exports = (_) => User;