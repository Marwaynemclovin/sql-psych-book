const { User, Booking } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single user by either their id or their email
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { email: params.email }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id or email!' });
    }

    res.json(foundUser);
  },

  // create a new user
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something went wrong while creating the user.' });
    }

    const token = signToken(user);

    res.json({ token, user });
  },

  // login a user and return a token
  async login({ body }, res) {
    const user = await User.findOne({ email: body.email });

    if (!user) {
      return res.status(400).json({ message: 'Cannot find a user with this email address.' });
    }

    const correctPassword = await user.isCorrectPassword(body.password);

    if (!correctPassword) {
      return res.status(400).json({ message: 'Incorrect password.' });
    }

    const token = signToken(user);

    res.json({ token, user });
  },

  // create a new booking
  async createBooking({ user, body }, res) {
    try {
      const newBooking = await Booking.create({
        patient_id: user._id,
        psychologist_id: body.psychologist_id,
        date: body.date,
        notes: body.notes
      });

      if (!newBooking) {
        return res.status(400).json({ message: 'Something went wrong while creating the booking.' });
      }

      res.json(newBooking);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // update a booking
  async updateBooking({ user, params, body }, res) {
    try {
      const updatedBooking = await Booking.findOneAndUpdate(
        { _id: params.id, patient_id: user._id },
        body,
        { new: true, runValidators: true }
      );

      if (!updatedBooking) {
        return res.status(404).json({ message: "Couldn't find a booking with this ID." });
      }

      res.json(updatedBooking);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // delete a booking
  async deleteBooking({ user, params }, res) {
    try {
      const deletedBooking = await Booking.findOneAndDelete(
        { _id: params.id, patient_id: user._id }
      );

      if (!deletedBooking) {
        return res.status(404).json({ message: "Couldn't find a booking with this ID." });
      }

      res.json({ message: 'Booking has been deleted.' });
    } catch (err) {
      res.status(400).json(err);
    }
  }
};
