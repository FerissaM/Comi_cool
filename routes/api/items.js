const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// get to retrieve all items
router.get('/', itemsCtrl.index);
// get to retrieve a single item by ID
router.get('/:id', itemsCtrl.show);

module.exports = router;