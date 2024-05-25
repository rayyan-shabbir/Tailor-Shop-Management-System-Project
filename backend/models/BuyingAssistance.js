// backend/models/BuyingAssistance.js
const mongoose = require('mongoose');

const BuyingAssistanceSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    productLinks: [String],
    productURLs: {
        product1: { type: String },
        product2: { type: String },
        product3: { type: String }
    },
    productPrice: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    sumOfProducts: { type: Number, required: true },
});

module.exports = mongoose.model('BuyingAssistance', BuyingAssistanceSchema, 'buyingAssistant');

