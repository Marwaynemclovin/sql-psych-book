const Booking = require('../models/booking');
const User = require('../models/user');

// Get all bookings with related patient and psychologist
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        { model: User, as: 'patient' },
        { model: User, as: 'psychologist' }
      ]
    });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

// Get a single booking by ID
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [
        { model: User, as: 'patient' },
        { model: User, as: 'psychologist' }
      ]
    });
    if (!booking) {
      res.status(404).send('Booking not found');
    } else {
      res.json(booking);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

// Update an existing booking
const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) {
      res.status(404).send('Booking not found');
    } else {
      await booking.update(req.body);
      res.json(booking);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

// Delete a booking
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) {
      res.status(404).send('Booking not found');
    } else {
      await booking.destroy();
      res.json({ message: 'Booking deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  getBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking
};
