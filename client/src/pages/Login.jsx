import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back</h2>
        <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userFormData.email}
              onChange={handleChange}
              className="border-gray-400 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userFormData.password}
              onChange={handleChange}
              className="border-gray-400 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          {error && (
            <p className="text-red-600">{error.message}</p>
          )}
        <button
          type="submit"
          className="py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md shadow-sm hover:scale-110 hover:bg-blue-600"
        >
          Sign In
        </button>

        </form>
        <div className="flex items-center justify-center mt-4">
        <p className="text-gray-600">Don't have an account?</p>
        <Link
          to="/signup"
          className="ml-2 font-medium text-cyan-500"
        >
          Sign Up
        </Link>
      </div>
      <button className="text-cyan-500 hover:text-blue-700 mt-4" onClick={() => window.location.assign('/')}>
        Back to home
      </button>
      </div>
    </div>
  );
};

export default Login;
