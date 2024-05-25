// backend/models/CustomDesignOrder.js
const mongoose = require('mongoose');

const CustomDesignOrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  clothDetails: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CustomDesignOrder', CustomDesignOrderSchema);
