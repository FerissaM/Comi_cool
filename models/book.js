const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: String,
  publishedYear: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  series: {
    name: {
      type: String
    },
    volume: {
      type: Number
    }
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;