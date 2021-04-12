const Sequelize = require('sequelize');
const db = require('../config/database');
const Book = require('./Book');

const Author = db.define('author', {
	author_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},

	first_name: {
		type: Sequelize.STRING(100),
		allowNull: false
	},

	last_name: {
		type: Sequelize.STRING(200),
		allowNull: false
	}
})

Author.hasMany(Book, {
  foreignKey: 'author_id'
});

Book.belongsTo(Author, {
  foreignKey: 'author_id'
});

module.exports = Author;