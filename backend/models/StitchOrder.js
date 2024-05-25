// backend/models/StitchOrder.js
const mongoose = require('mongoose');

const StitchOrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  imageUrl: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StitchOrder', StitchOrderSchema);
