import React from 'react';
import { FaHome, FaSignOutAlt, FaUser, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Profile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex flex-row">
      <div className="hidden md:flex flex-col w-64 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen text-white">
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold">Emily Smith</h1>
          <p className="text-white">Welcome back!</p>
        </div>
        <nav className={`flex-1 ${isNavOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="text-white text-xl flex flex-col">
            <li className="p-4 flex items-center hover:scale-110 cursor-pointer">
            <Link to="/"> <FaHome className="mr-2" /></Link>
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 flex items-center hover:scale-110 cursor-pointer">
              <FaSignOutAlt className="mr-2" />
              <Link to="/profile">Log Out</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={handleToggleNav}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>


      <div className="md:hidden fixed top-0 right-0">
        {isNavOpen ? (
          <div className="fixed left-0 top-0 w-full h-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-bold px-4 py-7 flex flex-col">
            <div className="flex justify-end mb-4">
              <AiOutlineClose
                size={20}
                onClick={handleToggleNav}
                className="hover:scale-110"
              />
            </div>
            <ul className="flex flex-col">
              <li
                className="mr-6 hover:scale-110"
                onClick={handleToggleNav}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className="mr-6 hover:scale-110"
                onClick={handleToggleNav}
              >
                <Link to="/profile">Log Out</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-4 shadow-md">
            <AiOutlineMenu
              size={32}
              onClick={handleToggleNav}
              className="cursor-pointer hover:scale-110 text-white"
            />
          </div>
        )}
      </div>

      <div className="w-full pt-4">
        <form className="bg-white rounded-lg p-8 w-full md:w-100 mb-4">
          <h2 className="text-2xl font-bold mb-6">Your Current Bookings</h2>
          <div className="flex items-center bg-white rounded-lg p-4 shadow-md mb-4">
            <div className="flex-shrink-0">
              <FaUser size={48} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-bold">Dr. John Doe</h2>
              <p className="text-gray-500">CBT with Dr. John Doe</p>
              <div>
                <p className="text-gray-500">Date: May 12, 2023</p>
                <p className="text-gray-500">Time: 2:00 PM</p>
                <p className="text-gray-500">Place: 123 Main St, Suite 200</p>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-white rounded-lg p-4 shadow-md mb-4">
            <div className="flex-shrink-0">
              <FaUser size={48} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-bold">Dr. Jane Smith</h2>
              <p className="text-gray-500">ADHD Testing with Dr. Jane Smith</p>
              <div>
                <p className="text-gray-500">Date: May 12, 2023</p>
                <p className="text-gray-500">Time: 2:00 PM</p>
                <p className="text-gray-500">Place: 123 Main St, Suite 200</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Book a Future Appointment</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="booking-date">
          Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="booking-date"
          type="date"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="booking-time">
          Time
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="booking-time"
          type="time"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="booking-psychologist">
          Psychologist
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="booking-psychologist"
          required
        >
          <option value="">Select a psychologist</option>
          <option value="Dr. John Doe">Dr. John Doe</option>
          <option value="Dr. Jane Smith">Dr. Jane Smith</option>
          <option value="Dr. Bob Johnson">Dr. Bob Johnson</option>
        </select>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Confirm Booking
        </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
export default Profile;