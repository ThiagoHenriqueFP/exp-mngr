	const { Model, DataTypes } = require('sequelize');

	class MensalExpense extends Model {
	  static init(connection) {
	    super.init({
	      id: {
	        type: DataTypes.INTEGER,
	        primaryKey: true,
	        autoIncrement: true,
	      },
	      value: {
	        type: DataTypes.INTEGER,
	      },
	      settled: {
	        type: DataTypes.INTEGER,
	      }
	    }, {
	      sequelize: connection,
	      modelName: 'mensalexpense',
	      freezeTableName: true,
	      createdAt: true,
	      updatedAt: true,
	      timestamps: true
	    });
	  }
	  static associate(models) {
	    this.hasMany(models.debt, { foreignKey: 'id' });
	  }
	};

	module.exports = (_) => MensalExpense;