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
            description: "THE WICKED SIDE OF WIZARDRY ? Cute girl wizard Lucy wants to join the Fairy Tail, a club for the most powerful wizards. But instead, her ambitions land her in the clutches of a gang of unsavory pirates le by a devious magician. Her only hope is Natsu, a strange boy she happens to meet on her travels. Natsu's not your typical hero - he gets motion sickness, eats like a pig, and his best friend is a talking cat. With friends like this, is Lucy better off with her enemies?",
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 1 },
            imageUrl: 'https://i.imgur.com/N0EZ27V.jpg'
        },
        { 
            title: 'Fairy Tail Vol. 2',
            author: 'Hiro Mashima',
            description: "THE BOOK OF SECRETS ? In the second volume of Fairy Tail, beautiful celestial wizard Lucy as teamed up with the crazy fire wizard Natsu and his bizarre flying cat, Happy. Their job: to steal a book from the notorious Duke Everlue. But the eccentric Everlue has killed wizards before, and Lucy's team is walking right into his death trap! Includes special extras after the story!",
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 2 },
            imageUrl: 'https://i.imgur.com/NJuYarb.jpg'
        },
        { 
            title: 'Fairy Tail Vol. 3',
            author: 'Hiro Mashima',
            description: "MUSICAL MURDERS ? In the third volume of Fairy Tail, the evil members of the Dark Guild Eisenwald have found a cursed flute that can murder anyone who hears its music - and now they've taken over a midtown train station with a very loud public address system. Only Natsu and his crazy friends (including a flying cat) can stop them! Includes special extras after the story!",
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 3 },
            imageUrl: 'https://i.imgur.com/xKA9RyE.jpg'
        },
        { 
            title: 'Fairy Tail Vol. 4',
            author: 'Hiro Mashima',
            description: "S IS FOR SCREWUP ? S-Class quests are so dangerous that one false move means certain death! Now Fairy Tail's loose cannon Natsu, rookie Lucy, and nearly powerless Happy have embarked on a stolen S-Class quest, setting out for the Demon Island. Can anyone stop them before they get themselves killed? Includes special extras after the story!",
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 4 },
            imageUrl: 'https://i.imgur.com/pPA14BX.jpg'
        },
        { 
            title: 'Fairy Tail Vol. 5',
            author: 'Hiro Mashima',
            description: "GRAY-OUT Gray's old training companion Reitei Lyon is trying to revive a calamity demon, but doing so will make their former master's sacrifice meaningless! What's the secret of Gray's past, and why does he keep taking off his clothing? Gray is revealed (metaphorically speaking) in this pivotal volume of Fairy Tail! Includes special extras after the story!",
            genre: 'Shonen',
            price: 10.99,
            series: { name: 'Fairy Tail', volume: 5 },
            imageUrl: 'https://i.imgur.com/rCOdk3l.jpg'
        },
        { 
            title: 'Fairy Tail Vol. 6',
            author: 'Hiro Mashima',
            description: "DEMON RISING Hotshot Natsu and his cool rival Gray are fghting to stop a calamity demon from being revived by Gray's fellow disciple Lyon and Zalty, a master of lost magic. But while they try to defeat the bad guys, the magical ice binding the demon keeps melting. Then a grudge between Fairy Tail and a rival guild turns to all-out war! Includes special extras after the story!",
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
            series: { name: 'Dragon Ball', volume: 1 },
            imageUrl: 'https://i.imgur.com/IUTaygE.jpg'
        },
        { 
            title: 'Dragon Ball Vol. 2',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 2 },
            imageUrl: 'https://i.imgur.com/zwKRZMt.jpg'
        },
        { 
            title: 'Dragon Ball Vol. 3',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 3 },
            imageUrl: 'https://i.imgur.com/7izNKYG.jpg'
        },
        { 
            title: 'Dragon Ball Vol. 4',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 4 },
            imageUrl: 'https://i.imgur.com/lruKulZ.jpg'
        },
        { 
            title: 'Dragon Ball Vol. 5',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 5 },
            imageUrl: 'https://i.imgur.com/yfvQbZ5.jpg'
        },
        { 
            title: 'Dragon Ball Vol. 6',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 6 },
            imageUrl: 'https://i.imgur.com/yiyVLTT.jpg'
        },
        { 
            title: 'Dragon Ball Vol. 7',
            author: 'Toriyama Akira',
            description: 'Kamehame ha!',
            genre: 'Shonen',
            price: 11.99,
            series: { name: 'Dragon Ball', volume: 7 },
            imageUrl: 'https://i.imgur.com/hGvB8qJ.jpg'
        },
        {
            title: 'Jujutsu Kaisen Vol. 1',
            author: 'Akutami Gege',
            description: 'Gojo kitkat',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'Jujutsu Kaisen', volume: 1 },
            imageUrl: 'https://i.imgur.com/0gI3THr.jpg'
        },
        {
            title: 'Jujutsu Kaisen Vol. 2',
            author: 'Akutami Gege',
            description: 'Gojo kitkat',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'Jujutsu Kaisen', volume: 2 },
            imageUrl: 'https://i.imgur.com/PxuKdyW.jpg'
        },
        {
            title: 'Jujutsu Kaisen Vol. 3',
            author: 'Akutami Gege',
            description: 'Gojo kitkat',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'Jujutsu Kaisen', volume: 3 },
            imageUrl: 'https://i.imgur.com/UsFW3Lq.jpg'
        },
        {
            title: 'Jujutsu Kaisen Vol. 4',
            author: 'Akutami Gege',
            description: 'Gojo kitkat',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'Jujutsu Kaisen', volume: 4 },
            imageUrl: 'https://i.imgur.com/JqEqnqr.jpg'
        },
        {
            title: 'Jujutsu Kaisen Vol. 5',
            author: 'Akutami Gege',
            description: 'Gojo kitkat',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'Jujutsu Kaisen', volume: 5 },
            imageUrl: 'https://i.imgur.com/Q52TC3P.jpg'
        },
        {
            title: 'One Piece Vol. 20',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 20 },
            imageUrl: 'https://i.imgur.com/Jgsq0dH.jpg'
        },
        {
            title: 'One Piece Vol. 21',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 21 },
            imageUrl: 'https://i.imgur.com/eKxrK9i.jpg'
        },
        {
            title: 'One Piece Vol. 22',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 22 },
            imageUrl: 'https://i.imgur.com/VgEldNo.jpg'
        },
        {
            title: 'One Piece Vol. 23',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 23 },
            imageUrl: 'https://i.imgur.com/kisf1vP.jpg'
        },
        {
            title: 'One Piece Vol. 24',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 24 },
            imageUrl: 'https://i.imgur.com/fL6HC1x.jpg'
        },
        {
            title: 'One Piece Vol. 25',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 25 },
            imageUrl: 'https://i.imgur.com/oCTWhGe.jpg'
        },
        {
            title: 'One Piece Vol. 26',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 26 },
            imageUrl: 'https://i.imgur.com/OxRdVGV.jpg'
        },
        {
            title: 'One Piece Vol. 27',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 27 },
            imageUrl: 'https://i.imgur.com/1OEAXqH.jpg'
        },
        {
            title: 'One Piece Vol. 28',
            author: 'Eiichiro Oda',
            description: 'Pirate King',
            genre: 'Shonen',
            price: 9.99,
            series: { name: 'One Piece', volume: 28 },
            imageUrl: 'https://i.imgur.com/UsLVjiL.jpg'
        },
        {
            title: 'Bleach Vol. 37',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 37 },
            imageUrl: 'https://i.imgur.com/NQJkn2e.jpg'
        },
        {
            title: 'Bleach Vol. 38',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 38 },
            imageUrl: 'https://i.imgur.com/4itwUYB.jpg'
        },
        {
            title: 'Bleach Vol. 39',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 39 },
            imageUrl: 'https://i.imgur.com/ydLNgav.jpg'
        },
        {
            title: 'Bleach Vol. 40',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 40 },
            imageUrl: 'https://i.imgur.com/7ki7ltn.jpg'
        },
        {
            title: 'Bleach Vol. 41',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 41 },
            imageUrl: 'https://i.imgur.com/B5KQI0Y.jpg'
        },
        {
            title: 'Bleach Vol. 42',
            author: 'Tite Kubo',
            description: 'Shinigami',
            genre: 'Action',
            price: 7.99,
            series: { name: 'Bleach', volume: 42 },
            imageUrl: 'https://i.imgur.com/xpRRUJW.jpg'
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
            description: "AT THAT MOMENT, MY LIFE TOOK ON A DIFFERENT GENRE. As a struggling office worker, Dokja Kim’s sole joy in life is an online novel so obscure that he’s its only reader. Then one day the story comes to an end…and so does the world. People all around the globe suddenly find themselves being massacred by horrific monsters or pitted against each other in sadistic scenarios straight out of the novel. However, only Dokja is aware that this is merely the first chapter of what is to come. Knowing that devastating plot twists are on the horizon, he can no longer afford to sit back as a reader―it’s time for Dokja to step up and write his own destiny!",
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