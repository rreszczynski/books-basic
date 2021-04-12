const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Author = require('../models/Author');


// pobieranie wszystkich autorów
const getAllAuthors = async (req, res) => {
	try {
		const authors = await Author.findAll();
		return res.status(200).send(authors);
	} catch (error) {
		return res.status(500).send(error.message);
	}
}
router.get('/', getAllAuthors);


module.exports = router;