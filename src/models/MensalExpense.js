	const { Model, DataTypes } = require('sequelize');

	class MensalExpense extends Model {
	  static init(connection) {
	    super.init({
	      value: {
	        type: DataTypes.INTEGER,
	      },
	      settled: {
	        type: DataTypes.INTEGER,
	      }
	    }, {
	      sequelize: connection,
	      tableName: 'expenses',
	      timestamps: true
	    });
	  }
	  static associate(models) {
	    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'expense' })
	    this.hasMany(models.Debt, { foreignKey: 'id', as: 'debts' });
	  }
	};

	module.exports = (_) => MensalExpense;