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
            title: 'Fairy Tail Vol. 2',
            author: 'Hiro Mashima',
            description: 'Natsu!',
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 2 },
            imageUrl: 'https://imgur.com/aK2FuIz'
        },
        { 
            title: 'Fairy Tail Vol. 3',
            author: 'Hiro Mashima',
            description: 'Natsu!',
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 3 },
            imageUrl: 'https://imgur.com/aK2FuIz'
        },
        { 
            title: 'Fairy Tail Vol. 4',
            author: 'Hiro Mashima',
            description: 'Natsu!',
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 4 },
            imageUrl: 'https://imgur.com/aK2FuIz'
        },
        { 
            title: 'Fairy Tail Vol. 5',
            author: 'Hiro Mashima',
            description: 'Natsu!',
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 5 },
            imageUrl: 'https://imgur.com/aK2FuIz'
        },
        { 
            title: 'Fairy Tail Vol. 6',
            author: 'Hiro Mashima',
            description: 'Natsu!',
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 6 },
            imageUrl: 'https://imgur.com/aK2FuIz'
        },
        { 
            title: 'Dragon Ball Vol. 1',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 1 }
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
            title: 'Dragon Ball Vol. 3',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 3 }
        },
        { 
            title: 'Dragon Ball Vol. 4',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 4 }
        },
        { 
            title: 'Dragon Ball Vol. 5',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 5 }
        },
        { 
            title: 'Dragon Ball Vol. 6',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 6 }
        },
        { 
            title: 'Dragon Ball Vol. 7',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 7 }
        },
        {
            title: 'Jujutsu Kaisen Vol. 1',
            author: 'Akutami Gege',
            description: 'Gojo kitkat',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'Jujutsu Kaisen', volume: 1 }
        },
        {
            title: 'Jujutsu Kaisen Vol. 2',
            author: 'Akutami Gege',
            description: 'Gojo kitkat',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'Jujutsu Kaisen', volume: 2 }
        },
        {
            title: 'Jujutsu Kaisen Vol. 3',
            author: 'Akutami Gege',
            description: 'Gojo kitkat',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'Jujutsu Kaisen', volume: 3 }
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
            title: 'Jujutsu Kaisen Vol. 5',
            author: 'Akutami Gege',
            description: 'Gojo kitkat',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'Jujutsu Kaisen', volume: 5 }
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
            title: 'One Piece Vol. 201',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 201 }
        },
        {
            title: 'One Piece Vol. 202',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 202 }
        },
        {
            title: 'One Piece Vol. 203',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 203 }
        },
        {
            title: 'One Piece Vol. 204',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 204 }
        },
        {
            title: 'One Piece Vol. 205',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 205 }
        },
        {
            title: 'One Piece Vol. 206',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 206 }
        },
        {
            title: 'One Piece Vol. 207',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 207 }
        },
        {
            title: 'One Piece Vol. 208',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 208 }
        },
        {
            title: 'One Piece Vol. 209',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 209 }
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
            title: 'Bleach Vol. 38',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 38 }
        },
        {
            title: 'Bleach Vol. 39',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 39 }
        },
        {
            title: 'Bleach Vol. 40',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 40 }
        },
        {
            title: 'Bleach Vol. 41',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 41 }
        },
        {
            title: 'Bleach Vol. 42',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 42 }
        },
        {
            title: 'Bleach Vol. 43',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 43 }
        },
        {
            title: 'Bleach Vol. 44',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 44 }
        },
        {
            title: 'Bleach Vol. 45',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 45 }
        },
        {
            title: 'Bleach Vol. 46',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 46 }
        },
        {
            title: 'Bleach Vol. 47',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 48 }
        },
        {
            title: 'Bleach Vol. 49',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 49 }
        },
        {
            title: 'Ao Haru Ride Vol. 1',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 1 }
        },
        {
            title: 'Ao Haru Ride Vol. 2',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 2 }
        },
        {
            title: 'Ao Haru Ride Vol. 3',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 3 }
        },
        {
            title: 'Ao Haru Ride Vol. 4',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 4 }
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
            title: 'Ao Haru Ride Vol. 6',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 6 }
        },
        {
            title: 'Ao Haru Ride Vol. 7',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 7 }
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
            title: 'Kuroko no Basket Vol. 2',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 2 }
        },
        {
            title: 'Kuroko no Basket Vol. 3',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 3 }
        },
        {
            title: 'Kuroko no Basket Vol. 4',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 4 }
        },
        {
            title: 'Kuroko no Basket Vol. 5',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 5 }
        },
        {
            title: 'Kuroko no Basket Vol. 6',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 6 }
        },
        {
            title: 'Kuroko no Basket Vol. 7',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 7 }
        },
        {
            title: 'Kuroko no Basket Vol. 8',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 8 }
        },
        {
            title: 'Kuroko no Basket Vol. 9',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 9 }
        },
        {
            title: 'Kuroko no Basket Vol. 10',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 10 }
        },
        {
            title: 'Kuroko no Basket Vol. 11',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 11 }
        },
        {
            title: 'Kuroko no Basket Vol. 12',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 12 }
        },
        {
            title: 'Kuroko no Basket Vol. 13',
            author: 'Fujimaki Tadatoshi',
            description: 'Maboroshii no sixth man',
            genre: 'Sports',
            price: 9.99,
            series: { name: 'Kuroko no Basket', volume: 13 }
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
            title: 'Berserk Vol. 7',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 7 }
        },
        {
            title: 'Berserk Vol. 8',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 8 }
        },
        {
            title: 'Berserk Vol. 9',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 9 }
        },
        {
            title: 'Berserk Vol. 10',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 10 }
        },
        {
            title: 'Berserk Vol. 11',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 11 }
        },
        {
            title: 'Berserk Vol. 12',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 12 }
        },
        {
            title: 'Omniscient Reader Viewpoint Vol. 1',
            author: 'Sing-shong, Sleepy-e',
            description: '3 ways to survive in a ruined world',
            genre: 'Action',
            price: 10.99,
            series: { name: 'Omniscient Reader Viewpoint', volume: 1 }
        },
        {
            title: 'Omniscient Reader Viewpoint Vol. 2',
            author: 'Sing-shong, Sleepy-e',
            description: '3 ways to survive in a ruined world',
            genre: 'Action',
            price: 10.99,
            series: { name: 'Omniscient Reader Viewpoint', volume: 2 }
        },
        {
            title: 'Omniscient Reader Viewpoint Vol. 3',
            author: 'Sing-shong, Sleepy-e',
            description: '3 ways to survive in a ruined world',
            genre: 'Action',
            price: 10.99,
            series: { name: 'Omniscient Reader Viewpoint', volume: 3 }
        },
        {
            title: 'Omniscient Reader Viewpoint Vol. 4',
            author: 'Sing-shong, Sleepy-e',
            description: '3 ways to survive in a ruined world',
            genre: 'Action',
            price: 10.99,
            series: { name: 'Omniscient Reader Viewpoint', volume: 4 }
        },
        {
            title: 'Omniscient Reader Viewpoint Vol. 5',
            author: 'Sing-shong, Sleepy-e',
            description: '3 ways to survive in a ruined world',
            genre: 'Action',
            price: 10.99,
            series: { name: 'Omniscient Reader Viewpoint', volume: 5 }
        },
        {
            title: 'Omniscient Reader Viewpoint Vol. 6',
            author: 'Sing-shong, Sleepy-e',
            description: '3 ways to survive in a ruined world',
            genre: 'Action',
            price: 10.99,
            series: { name: 'Omniscient Reader Viewpoint', volume: 6 }
        },
        {
            title: 'Omniscient Reader Viewpoint Vol. 7',
            author: 'Sing-shong, Sleepy-e',
            description: '3 ways to survive in a ruined world',
            genre: 'Action',
            price: 10.99,
            series: { name: 'Omniscient Reader Viewpoint', volume: 7 }
        },
        {
            title: 'Omniscient Reader Viewpoint Vol. 8',
            author: 'Sing-shong, Sleepy-e',
            description: '3 ways to survive in a ruined world',
            genre: 'Action',
            price: 10.99,
            series: { name: 'Omniscient Reader Viewpoint', volume: 8 }
        },
      ]);
  
      console.log('Seed data:', books);
    } catch (err) {
      console.error('Error seeding data:', err);
    } finally {
      process.exit();
    }
  })();