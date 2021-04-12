const Sequelize = require('sequelize');


// połączenie z bazą danych
module.exports = new Sequelize('tin_projekt', 'root', 'root', { // 'baza', 'uzytkownik', 'haslo'
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});