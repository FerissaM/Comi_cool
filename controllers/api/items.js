const Item = require('../../models/item');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try {
    const items = await Item.find({}).sort('name').populate('category').exec();
    // Re-sort based on the sortOrder of the populated categories
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function show(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
