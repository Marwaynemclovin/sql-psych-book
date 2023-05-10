const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String
    last_name: String
    role: String
    dob: String
    email: String
    password: String
    bookings: [Booking]
  }

  type Booking {
    _id: ID
    patient_id: User
    psychologist_id: User
    date: String
    notes: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    bookings: [Booking]
  }

  input BookingInput {
    patient_id: ID
    psychologist_id: ID
    date: String
    notes: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      first_name: String!
      last_name: String!
      role: String!
      dob: String!
      email: String!
      password: String!
    ): Auth
    createBooking(input: BookingInput!): Booking
    deleteBooking(_id: ID!): Booking
  }
`;

module.exports = typeDefs;
