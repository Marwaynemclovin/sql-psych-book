const express = require('express');
const session = require('express-session');
const { userRoutes, bookingRoutes, authRoutes } = require('./api');
const app = express();

// Set up session middleware
app.use(session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Note: set to true in production environment
}));

// Define all routes
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
 