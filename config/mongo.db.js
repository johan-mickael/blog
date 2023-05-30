const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const url = 'mongodb://localhost:27017';
const dbName = 'blog';

async function createMongoDBPool() {
    try {
        const client = await MongoClient.connect(url, options);
        const db = client.db(dbName);
        return {
            client,
            db,
        };;
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

mongoose.connect(url + '/' + dbName, options);

module.exports = {
    createMongoDBPool,
    mongoose,
}