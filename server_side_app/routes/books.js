const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Book = require('../models/Book');
const Author = require('../models/Author');

// pobieranie wszystkich książek
const getAllBooks = async (req, res) => {
	try {
		const books = await Book.findAll();
		return res.status(200).send(books);
	} catch (error) {
		return res.status(500).send(error.message);
	}
}

// pobieranie wszystkich książek wraz z autorami
const getAllBooksWithAuthors = async (req, res) => {
	try {
		const books = await Book.findAll({ include: Author });
		return res.status(200).send(books);
	} catch (error) {
		return res.status(500).send(error.message);
	}
}

// dodawanie książki do bazy danych
const addBookToDatabase = async (req, res) => {	
	try {
		//console.log(req.body);
		const newBook = Book.create({
			title: req.body.title,
			issue_date: req.body.date,
			author_id: req.body.author
		});

		return res.status(200).send(newBook);
	} catch (error) {
		return res.status(500).send(error.message);
	}
}

router.get('/', getAllBooks);
router.post('/addbook', addBookToDatabase);
router.get('/withauthors', getAllBooksWithAuthors);


module.exports = router;