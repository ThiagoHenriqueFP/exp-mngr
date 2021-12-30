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
	      tableName: 'mensal_expense',
	      timestamps: true
	    });
	  }
	  static associate(models) {
	    this.belongsTo(models.User, { foreignKey: 'user_id', })
	    this.hasMany(models.Debt, { foreignKey: 'id' });
	  }
	};

	module.exports = (_) => MensalExpense;