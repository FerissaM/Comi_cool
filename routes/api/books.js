const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');

// All paths start with '/api/books'

// GET /api/books (get all books)
router.get('/', booksCtrl.getAllBooks);

// GET /api/books/:id (get a single book by ID)
router.get('/:id', booksCtrl.getBookById);

// POST /api/books (create a new book)
router.post('/', booksCtrl.createBook);

// PUT /api/books/:id (update a book by ID)
router.put('/:id', booksCtrl.updateBook);

// DELETE /api/books/:id (delete a book by ID)
router.delete('/:id', booksCtrl.deleteBook);

module.exports = router;
