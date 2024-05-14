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
        series: { name: 'Fairy Tail', volume: 1 }
    },
    { 
        title: 'Dragon Ball',
        author: 'Toriyama Akira',
        description: 'Kamehame ha!',
        genre: 'Shonen',
        price: 11.99,
        series: { name: 'Dragon Ball', volume: 2 }
    },
    {
        title: 'Jujutsu Kaisen',
        author: 'Akutami Gege',
        description: 'Gojo kitkat',
        genre: 'Shonen',
        price: 9.99,
        series: { name: 'Jujutsu Kaisen', volume: 4 }
    },
    {
        title: 'One Piece',
        author: 'Eiichiro Oda',
        description: 'Pirate King',
        genre: 'Shonen',
        price: 9.99,
        series: { name: 'One Piece', volume: 200 }
    },
    {
        title: 'Bleach',
        author: 'Tite Kubo',
        description: 'Shinigami',
        genre: 'Action',
        price: 7.99,
        series: { name: 'Bleach', volume: 37 }
    },
    {
        title: 'Ao Haru Ride',
        author: 'Sakisaka',
        description: 'Futaba simp for Kou',
        genre: 'Shojou',
        price: 9.99,
        series: { name: 'Ao Haru Ride', volume: 5 }
    },
    {
        title: 'Kuroko no Basket',
        author: 'Fujimaki Tadatoshi',
        description: 'Maboroshii no sixth man',
        genre: 'Sports',
        price: 9.99,
        series: { name: 'Kuroko no Basket', volume: 1 }
    },
    {
        title: 'Berserk',
        author: 'Kentaro Miura',
        description: 'If you want to be traumatized, go ahead',
        genre: 'Seinen',
        price: 7.99,
        series: { name: 'Berserk', volume: 6 }
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    {
        title: '',
        author: '',
        description: '',
        genre: '',
        price: '',
        series: { name: '', volume: ''}
    },
    // just a sample, will edit later
  ]);

  console.log(books);

  process.exit();

})();
