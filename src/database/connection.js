const { Sequelize } = require('sequelize');
const user = process.env.USER;
const password = process.env.PASSWD;
const db_name = process.env.DB_NAME;
const db_port = process.env.DB_PORT || 5432;

const sequelize = new Sequelize(`postgres://${user}:${password}/${db_port}/${db_name}`);

try{
	await sequelize.authenticate();
	console.log(`Connection estabilished`);
} catch (err){
	console.log(`Unable to connect to the database:\n${err}`);
}
const connection = new Sequelize();

module.exports = connection;