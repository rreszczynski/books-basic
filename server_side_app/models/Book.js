const Sequelize = require('sequelize');
const db = require('../config/database');
const Author = require('./Author');

const Book = db.define('book', {
	book_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},

	title: {
		type: Sequelize.STRING(255),
		allowNull: false
	},

	issue_date: {
		type: Sequelize.DATE,

	},

	author_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: Author,
			key: 'author_id'
		}
	}

})

module.exports = Book;
