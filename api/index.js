const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const collection = require('./routes/collection');

app.use(collection);

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app,
};
