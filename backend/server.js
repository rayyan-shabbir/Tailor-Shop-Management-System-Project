const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Debug Middleware: Log the body data
app.use((req, res, next) => {
    console.log('Request Body:', req.body);
    next();
});

// Routes
const assistanceRoutes = require('./routes/buyingAssistanceRoutes');
app.use('/api/buying-assistance', assistanceRoutes);

const designRoutes = require('./routes/customDesignRoutes');
app.use('/api/custom-design', designRoutes);

const orderRoutes = require('./routes/stitchOrderRoutes');
app.use('/api/stitch-order', orderRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
