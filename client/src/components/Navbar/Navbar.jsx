import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import logo from '../../assets/psychlogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  
  const handleLinkClick = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrollPosition > 0 ? '#f7fafc' : 'transparent',
    color: scrollPosition > 0 ? '#1a202c' : '#fff',
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-20 px-4 text-white' style={navbarStyle}>
      <div className='flex items-center'>
        <Link to="/">
          <img src={logo} alt="logo" className="h-12" />
        </Link>
      </div>

      <div className='hidden md:flex flex-grow justify-center'>
        <ul className='flex'>
          <li className='mr-6 hover:scale-110'>
            <Link to="/">HOME</Link>
          </li>
          <li className='mr-6 hover:scale-110'>
            <Link to="/get-matched">GET MATCHED</Link>
          </li>
          <li className='mr-6 hover:scale-110'><Link to="/book">BOOKINGS</Link></li>
          <li className='mr-6 hover:scale-110'><Link to="/login">LOGIN</Link></li>
          <li className='mr-6 hover:scale-110'><Link to="/profile">PROFILE</Link></li>
        </ul>
      </div>

      <div className='md:hidden ml-auto'>
        <HiOutlineMenuAlt4 size={20} onClick={handleMenuClick} className='hover:scale-110' />
      </div>

      {showMenu && (
      <div className='fixed left-0 top-0 w-full h-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-bold px-4 py-7 flex flex-col'>
        <div className='flex justify-end mb-4'>
          <AiOutlineClose size={20} onClick={handleMenuClick} className='hover:scale-110' />
        </div>
        <ul className='flex flex-col'>
          <li className='mr-6 hover:scale-110' onClick={handleLinkClick}>
            <Link to="/">HOME</Link>
          </li>
          <li className='mr-6 hover:scale-110' onClick={handleLinkClick}>
            <Link to="/get-matched">GET MATCHED</Link>
          </li>
          <li className='mr-6 hover:scale-110' onClick={handleLinkClick}>
            <Link to="/book">BOOKINGS</Link>
          </li>
          <li className='mr-6 hover:scale-110' onClick={handleLinkClick}>
            <Link to="/login">LOGIN</Link>
          </li>
          <li className='mr-6 hover:scale-110' onClick={handleLinkClick}>
            <Link to="/profile">PROFILE</Link>
          </li>
        </ul>
        <div className='flex justify-center mt-auto'>
          <button onClick={handleMenuClick} className='text-black bg-white font-bold rounded-full py-2 px-8 mx-2 transform hover:scale-110 w-50'>
            Log In
          </button>
          <button onClick={handleMenuClick} className='text-black bg-white font-bold rounded-full py-2 px-8 mx-2 transform hover:scale-110 w-50'>
            Sign Up
          </button>
        </div>
      </div>
    )}
    </div>
  );

};

export default Navbar;
