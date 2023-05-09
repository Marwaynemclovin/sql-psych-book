const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/connection');
const User = require('./models/User');
const  Booking  = require('./models/booking');

require('dotenv').config();
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set the timeout option to 60 seconds (60,000 ms)
app.use((req, res, next) => {
  res.setTimeout(60000, () => {
    console.log('Request has timed out.');
    res.status(408).send('Request has timed out.');
  });
  next();
});

// Routes
app.use('/users', require('./routes/index.js'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Catch all other routes and return the React index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});


// Start the server and connect to the database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}.`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Define models
User.sync();
Booking.sync();

module.exports = app;
