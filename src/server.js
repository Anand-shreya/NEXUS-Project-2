// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

// Replace YOUR_CONNECTION_STRING with the actual connection string from MongoDB Atlas
const MONGODB_URI = 'mongodb+srv://shreyaanand1501:<password>@cluster0.ivq8mlx.mongodb.net/';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
