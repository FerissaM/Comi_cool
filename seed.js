require('dotenv').config();
require('./config/database');

const Book = require('./models/book');

// IIFE
// Immediately Invoked Function Expression
(async function() {
    try {
      await Book.deleteMany({});
      const books = await Book.create([
        { 
            title: 'Fairy Tail Vol. 1',
            author: 'Hiro Mashima',
            description: 'Natsu!',
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 1 },
            imageUrl: 'https://imgur.com/aK2FuIz'
        },
        { 
            title: 'Dragon Ball Vol. 2',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 2 }
        },
        {
            title: 'Jujutsu Kaisen Vol. 4',
            author: 'Akutami Gege',
            description: 'Gojo kitkat',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'Jujutsu Kaisen', volume: 4 }
        },
        {
            title: 'One Piece Vol. 200',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 200 }
        },
        {
            title: 'Bleach Vol. 37',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 37 }
        },
        {
            title: 'Ao Haru Ride Vol. 5',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 5 }
        },
        {
            title: 'Kuroko no Basket Vol. 1',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 1 }
        },
        {
            title: 'Berserk Vol. 6',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 6 }
        },
        {
            title: 'Omniscient Reader Viewpoint Vol. 1',
            author: 'Sing-shong, Sleepy-e',
            description: '3 ways to survive in a ruined world',
            genre: 'Action',
            price: 10.99,
            series: { name: 'Omniscient Reader Viewpoint', volume: 1 }
        }
      ]);
  
      console.log('Seed data:', books);
    } catch (err) {
      console.error('Error seeding data:', err);
    } finally {
      process.exit();
    }
  })();