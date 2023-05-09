const express = require('express');
const { createBooking, getBookingById } = require('../../controllers/bookingsController');
const router = express.Router();

router.post('/', createBooking);
router.get('/:bookingId', getBookingById);

module.exports = router;
