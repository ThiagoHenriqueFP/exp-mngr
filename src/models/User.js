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
        allowNull: false,
      }
    }, {
      sequelize: connection,
      tableName: 'users',
      timestamps: true,
      underscored: true,
      hooks: {
        beforeCreate: (user) => {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
        },
        beforeUpdate: (user) => {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
        }
      },
      instanceMethods: {
        validPassword(password) {
          return bcrypt.compareSync(password, this.password);
        }
      }
    });
  }

  static associate(models) {
    this.hasOne(models.MensalExpense, { foreignKey: 'user_id', as: 'expenses' });
  }
};

module.exports = (_) => User;