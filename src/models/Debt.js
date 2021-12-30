const { Model, DataTypes } = require('sequelize');

class Debt extends Model {
  static init(connection) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      value: { type: DataTypes.INTEGER },
      started_at: { type: DataTypes.DATE },
      end_at: { type: DataTypes.DATE }
    }, {
      sequelize: connection,
      modelName: 'debt',
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    });
  }
  static associate(models) {}
};

module.exports = (_) => Debt