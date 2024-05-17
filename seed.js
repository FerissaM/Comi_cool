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
            imageUrl: 'https://i.imgur.com/N0EZ27V.jpg'
        },
        { 
            title: 'Fairy Tail Vol. 2',
            author: 'Hiro Mashima',
            description: 'Natsu!',
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 2 },
            imageUrl: 'https://i.imgur.com/NJuYarb.jpg'
        },
        { 
            title: 'Fairy Tail Vol. 3',
            author: 'Hiro Mashima',
            description: 'Natsu!',
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 3 },
            imageUrl: 'https://i.imgur.com/xKA9RyE.jpg'
        },
        { 
            title: 'Fairy Tail Vol. 4',
            author: 'Hiro Mashima',
            description: 'Natsu!',
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 4 },
            imageUrl: 'https://i.imgur.com/pPA14BX.jpg'
        },
        { 
            title: 'Fairy Tail Vol. 5',
            author: 'Hiro Mashima',
            description: 'Natsu!',
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 5 },
            imageUrl: 'https://i.imgur.com/rCOdk3l.jpg'
        },
        { 
            title: 'Fairy Tail Vol. 6',
            author: 'Hiro Mashima',
            description: 'Natsu!',
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 6 },
            imageUrl: 'https://i.imgur.com/PSGoqHJ.jpg'
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
            title: 'One Piece Vol. 20',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 20 }
        },
        {
            title: 'One Piece Vol. 21',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 21 }
        },
        {
            title: 'One Piece Vol. 22',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 22 }
        },
        {
            title: 'One Piece Vol. 23',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 23 }
        },
        {
            title: 'One Piece Vol. 24',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 24 }
        },
        {
            title: 'One Piece Vol. 25',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 25 }
        },
        {
            title: 'One Piece Vol. 26',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 26 }
        },
        {
            title: 'One Piece Vol. 27',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 27 }
        },
        {
            title: 'One Piece Vol. 28',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 28 }
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
            title: 'Ao Haru Ride Vol. 1',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 1 },
            imageUrl: 'https://i.imgur.com/S52HhJw.jpg'
        },
        {
            title: 'Ao Haru Ride Vol. 2',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 2 },
            imageUrl: 'https://i.imgur.com/IMO6QJa.jpg'
        },
        {
            title: 'Ao Haru Ride Vol. 3',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 3 },
            imageUrl: 'https://i.imgur.com/LXUlHrg.jpg'
        },
        {
            title: 'Ao Haru Ride Vol. 4',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 4 },
            imageUrl: 'https://i.imgur.com/3WgTKmV.jpg'
        },
        {
            title: 'Ao Haru Ride Vol. 5',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 5 },
            imageUrl: 'https://i.imgur.com/nbjDvbz.jpg'
        },
        {
            title: 'Ao Haru Ride Vol. 6',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 6 },
            imageUrl: 'https://i.imgur.com/WwnFKhI.jpg'
        },
        {
            title: 'Ao Haru Ride Vol. 7',
            author: 'Sakisaka Io',
            description: 'Futaba simp for Kou',
            genre: 'Shojou',
            price: 9.99,
            series: { name: 'Ao Haru Ride', volume: 7 },
            imageUrl: 'https://i.imgur.com/ow3G0jl.jpg'
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
            title: 'Berserk Vol. 6',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 6 },
            imageUrl: 'https://i.imgur.com/6CUOCGm.jpg'
        },
        {
            title: 'Berserk Vol. 7',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 7 },
            imageUrl: 'https://i.imgur.com/Nc4wQ8U.jpg'
        },
        {
            title: 'Berserk Vol. 8',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 8 },
            imageUrl: 'https://i.imgur.com/vEnpW9g.jpg'
        },
        {
            title: 'Berserk Vol. 9',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 9 },
            imageUrl: 'https://i.imgur.com/DOSMklk.jpg'
        },
        {
            title: 'Berserk Vol. 10',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 10 },
            imageUrl: 'https://i.imgur.com/hAQoKAz.jpg'
        },
        {
            title: 'Berserk Vol. 11',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 11 },
            imageUrl: 'https://i.imgur.com/zcQ1AAP.jpg'
        },
        {
            title: 'Berserk Vol. 12',
            author: 'Kentaro Miura',
            description: 'If you want to be traumatized, go ahead',
            genre: 'Seinen',
            price: 7.99,
            series: { name: 'Berserk', volume: 12 },
            imageUrl: 'https://i.imgur.com/vFWY047.jpg'
        },
        {
            title: 'Omniscient Reader Viewpoint Vol. 1',
            author: 'Sing-shong, Sleepy-e',
            description: '3 ways to survive in a ruined world',
            genre: 'Action',
            price: 10.99,
            series: { name: 'Omniscient Reader Viewpoint', volume: 1 },
            imageUrl:'https://i.imgur.com/NCWaYd3.jpg'
        },
        {
            title: 'Omniscient Reader Viewpoint Vol. 2',
            author: 'Sing-shong, Sleepy-e',
            description: '3 ways to survive in a ruined world',
            genre: 'Action',
            price: 10.99,
            series: { name: 'Omniscient Reader Viewpoint', volume: 2 },
            imageUrl: 'https://i.imgur.com/fLq15y6.jpg'
        },
        {
            title: 'Omniscient Reader Viewpoint Vol. 3',
            author: 'Sing-shong, Sleepy-e',
            description: '3 ways to survive in a ruined world',
            genre: 'Action',
            price: 10.99,
            series: { name: 'Omniscient Reader Viewpoint', volume: 3 },
            imageUrl: 'https://i.imgur.com/98ZDXpO.jpg'
        },
      ]);
  
      console.log('Seed data:', books);
    } catch (err) {
      console.error('Error seeding data:', err);
    } finally {
      process.exit();
    }
  })();