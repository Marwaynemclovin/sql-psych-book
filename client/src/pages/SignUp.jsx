import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userFormData, setUserFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(JSON.stringify(userFormData));

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userFormData),
      });
console.log(response);
      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token } = await response.json();
      localStorage.setItem('token', token);
      navigate('/');
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      {showAlert && <div>Signup failed</div>}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
          <div className="flex flex-col">
            <label htmlFor="first_name" className="text-lg font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={userFormData.first_name}
              onChange={handleInputChange}
              className="border-gray-400 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last_name" className="text-lg font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={userFormData.last_name}
              onChange={handleInputChange}
              className="border-gray-400 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userFormData.email}
              onChange={handleInputChange}
              className="border-gray-400 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="text-lg font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userFormData.password}
              onChange={handleInputChange}
              className="border-gray-400 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg py-2 px-4 hover:from-cyan-600 hover:to-blue-600 transition duration-300 ease-in-out mt-2"
            >
              Sign Up
            </button>
            <div className="text-center">
              <button className="text-cyan-500 hover:text-blue-700 mt-4" onClick={() => window.location.assign('/')}>
                Back to home
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  
 };

export default Signup;
