import React from 'react';
import Booking from '../assets/Booking.png';
import { Link } from 'react-router-dom';

const Book = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center mt-8 lg:mt-0 lg:w-1/2">
          <img src={Booking} alt="Booking" className="object-contain w-500 h-500" />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:w-1/2 lg:text-left">
          <div className="flex flex-col space-y-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-4 text-center">ARE YOU A NEW CLIENT?</h2>
              <p className="text-gray-600 dark:text-gray-300 text-center">If you're a new client, please proceed to the GET MATCHED section via the button below.</p>
              <div className="flex justify-center">
                <Link to="/get-matched">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full mx-2 mt-4 block hover:scale-110">GET MATCHED</button>
                </Link>
                <Link to="/signup">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full mx-2 mt-4 block hover:scale-110">SIGN UP</button>
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-4 text-center">ARE YOU AN EXISTING CLIENT?</h2>
              <p className="text-gray-600 dark:text-gray-300 text-center">Please continue to the LOG IN screen via the button below to view your booking details.</p>
              <Link to="/login">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full mx-auto mt-4 block hover:scale-110">LOG IN</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
