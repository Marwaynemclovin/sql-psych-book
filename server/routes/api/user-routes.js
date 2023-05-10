const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  createBooking,
  updateBooking,
  deleteBooking,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// User routes
router.route('/').post(createUser);
router.route('/login').post(login);
router.route('/me').get(authMiddleware, getSingleUser);

// Booking routes
router.route('/bookings').post(authMiddleware, createBooking);
router.route('/bookings/:id').put(authMiddleware, updateBooking).delete(authMiddleware, deleteBooking);

module.exports = router;
