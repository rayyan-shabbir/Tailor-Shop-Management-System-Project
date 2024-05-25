const { MongoClient } = require('mongodb');

const mongoURL = 'mongodb://127.0.0.1:27017/tailordb';
const dbName = 'tailordb';

async function connectDB(collectionName) {
    const client = new MongoClient(mongoURL);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        return db.collection(collectionName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

module.exports = connectDB;
