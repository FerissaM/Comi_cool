const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');

// All paths start with '/api/books'

// GET /api/books (get all books)
router.get('/', booksCtrl.getAllBooks);
// GET /api/books/:id (get a single book by ID)
router.get('/:id', booksCtrl.getBookById);

module.exports = router;
