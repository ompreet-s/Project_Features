import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  
  const handleToggle = () => setShowDropdown((prev) => !prev);

  return (
    <>
      <nav className="bg-[#2d3150] text-white px-10 py-3 flex justify-between items-center">
       
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-orange-400 text-xl">
              <FaHome />
              <span className='text-md'>Home</span>
            </Link>
          </li>

          <li>
            <Link to="/coding" className="hover:text-orange-400">COMPETITION</Link>
          </li>

          <li>
            <Link to="/courses" className="hover:text-orange-400">COURSES</Link>
          </li>

          <li>
            <Link to="/learning" className="hover:text-orange-400">LEARNING</Link>
          </li>
        </ul>

       
        <div className="relative">
          <button onClick={handleToggle}>
            <FaUserCircle className="text-4xl cursor-pointer hover:text-orange-400" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50 py-2">
              <Link
                to="/coding"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                onClick={() => setShowDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                to="/courses"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                onClick={() => setShowDropdown(false)}
              >
                Courses
              </Link>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                onClick={() => setShowDropdown(false)}
              >
                Log Out
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
