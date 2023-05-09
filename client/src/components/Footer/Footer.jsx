import React from 'react';
import logo from '../../assets/psychlogo.png';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 mt-24">
      <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col lg:flex-row justify-between">
        <div className="flex justify-center lg:justify-start items-center lg:items-start mb-6 lg:mb-0">
          <a href="/">
            <img className="object-contain h-20 w-20 lg:h-40 lg:w-40" src={logo} alt="Psych Book Logo" />
          </a>
        </div>
        <div className="text-center lg:text-right">
          <h3 className="text-sm font-bold text-white tracking-wide uppercase mb-4 lg:mb-0">
            GET IN TOUCH
          </h3>
          <div className="mt-4 space-y-4">
            <p className="text-base text-white">Phone: +61 X XXXX XXXX</p>
            <p className="text-base text-white">Address: 1234 William Street Sydney Nsw</p>
            <p className="text-base text-white">Email: psychbook@gmail.com</p>
            <p className="text-base text-white">Monday - Friday: 8am - 7pm</p>
          </div>
        </div>
      </div>
      <div className="text-center text-base mt-12">
        <p className="text-cyan-50">
          © {new Date().getFullYear()} Psych Book. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
