const { User, Booking } = require('./models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('./utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to view your profile');
      }

      const user = await User.findById(context.user._id).populate('bookings');

      return user;
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user || !user.isCorrectPassword(password)) {
        throw new AuthenticationError('Incorrect email or password');
      }

      const token = signToken(user);
      return { token, user };
    },

    createUser: async (parent, { firstName, lastName, role, dob, email, password }) => {
      const user = new User({ firstName, lastName, role, dob, email, password });

      try {
        await user.save();

        const token = signToken(user);
        return { token, user };
      } catch (err) {
        throw new Error('Failed to create user');
      }
    },

    createBooking: async (parent, { patientId, psychologistId, date, notes }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to create a booking');
      }

      const newBooking = new Booking({ patientId, psychologistId, date, notes });

      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { bookings: newBooking } },
          { new: true }
        ).populate('bookings');

        return updatedUser;
      } catch (err) {
        throw new Error('Failed to create booking');
      }
    },

    updateBooking: async (parent, { id, patientId, psychologistId, date, notes }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to update a booking');
      }

      try {
        const updatedBooking = await Booking.findOneAndUpdate(
          { _id: id, patientId: context.user._id },
          { patientId, psychologistId, date, notes },
          { new: true }
        );

        return updatedBooking;
      } catch (err) {
        throw new Error('Failed to update booking');
      }
    },

    deleteBooking: async (parent, { id }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to delete a booking');
      }

      try {
        const deletedBooking = await Booking.findOneAndDelete({ _id: id, patientId: context.user._id });

        return deletedBooking;
      } catch (err) {
        throw new Error('Failed to delete booking');
      }
    },
  },

  User: {
    bookings: async ({ bookings }) => {
      const populatedBookings = await Booking.find({ _id: { $in: bookings } });
      return populatedBookings;
    },
  },
};

module.exports = resolvers;
