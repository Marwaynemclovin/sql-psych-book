import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      first_name
      last_name
      email
      role
      dob
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      first_name
      last_name
      email
      role
      dob
      bookings {
        _id
        date
        psychologist {
          _id
          first_name
          last_name
          email
        }
      }
    }
  }
`;

export const QUERY_USERS = gql`
  {
    users {
      _id
      first_name
      last_name
      email
      role
      dob
    }
  }
`;

export const QUERY_BOOKINGS = gql`
  {
    bookings {
      _id
      date
      psychologist {
        _id
        first_name
        last_name
        email
      }
      user {
        _id
        first_name
        last_name
        email
      }
    }
  }
`;

export const QUERY_PSYCHOLOGISTS = gql`
  {
    psychologists {
      _id
      first_name
      last_name
      email
    }
  }
`;
