import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        bookingCount
        bookings {
          _id
          bookingDate
          tour {
            _id
            name
            description
            price
            image
          }
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        bookingCount
        bookings {
          _id
          bookingDate
          tour {
            _id
            name
            description
            price
            image
          }
        }
      }
    }
  }
`;

export const SAVE_BOOKING = gql`
  mutation saveBooking($tourId: ID!) {
    saveBooking(tourId: $tourId) {
      _id
      firstName
      lastName
      email
      bookingCount
      bookings {
        _id
        bookingDate
        tour {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;

export const REMOVE_BOOKING = gql`
  mutation removeBooking($tourId: ID!) {
    removeBooking(tourId: $tourId) {
      _id
      firstName
      lastName
      email
      bookingCount
      bookings {
        _id
        bookingDate
        tour {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;
