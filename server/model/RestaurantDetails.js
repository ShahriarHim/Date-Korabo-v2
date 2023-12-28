const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant', // Reference to the Restaurant model
    required: true
  },
  food_type: String,
  item_name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Menu', menuSchema);
