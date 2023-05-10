const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  psychologist_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  notes: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
