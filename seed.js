require('dotenv').config();
require('./config/database');

const Book = require('./models/book');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Book.deleteMany({});
  const books = await Book.create([
    { 
      title: 'Fairy Tail', // same title for the whole series
      author: 'Hiro Mashima',
      description: 'Natsu!',
      genre: 'Shonen',
      price: 10.99,
      volume: 1
    },
    { 
      title: 'Dragon Ball',
      author: 'Toriyama Akira',
      description: 'Kamehame ha!',
      genre: 'Shojou',
      price: 11.99,
      volume: 2
    },
    // just a sample, will edit later
  ]);

  console.log(books);

  process.exit();

})();