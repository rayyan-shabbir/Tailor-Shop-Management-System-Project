const express = require('express');
const router = express.Router();
const connectDB = require('../config/db');

let dbCollection;
connectDB('stitchOrder').then(collection => dbCollection = collection);

// Route to handle POST requests and save data to MongoDB
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const result = await dbCollection.insertOne(data);
        console.log("Data saved successfully");
        res.status(201).json({ message: 'Data saved successfully', data: result.insertedId });
    } catch (error) {
        console.error('Error saving data to MongoDB:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
