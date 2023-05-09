const express = require('express');
const userRoutes = require('./users');
const bookingRoutes = require('./bookings');
const authRoutes = require('./auth');
const router = express.Router();

router.use('/users', userRoutes);
router.use('/bookings', bookingRoutes);
router.use('/auth', authRoutes);

module.exports = {
  userRoutes,
  bookingRoutes,
  authRoutes,
  router
};
