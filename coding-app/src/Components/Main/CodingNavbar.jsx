import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserCircle, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleToggle = () => setShowDropdown((prev) => !prev);
  const handleMobileToggle = () => setShowMobileMenu((prev) => !prev);

  return (
    <div>
      <nav className="bg-[#2d3150] text-white px-6 py-3 flex justify-between items-center flex-wrap max-sm:px-3">
   
        <ul className="flex max-sm:hidden items-center gap-7">
          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-green-400 text-2xl">
              <FaHome />
              <span className="text-md">Home</span>
            </Link>
          </li>
          <li><Link to="/coding" className="hover:text-green-400 text-xl">COMPETITION</Link></li>
          <li><Link to="/courses" className="hover:text-green-400 text-xl">COURSES</Link></li>
          <li><Link to="/learning" className="hover:text-green-400 text-xl">LEARNING</Link></li>
        </ul>

        <div className="relative">
          <button onClick={handleToggle}>
            <FaUserCircle className="text-4xl cursor-pointer hover:text-green-400" />
          </button>
          {showDropdown && (
            <div className="absolute flex flex-col right-0 mt-2 w-40 max-sm:left-0  max-sm:top-8 text-white bg-[#2d3150]  rounded shadow-lg z-50 py-2">
              <Link
                to="/coding"
                className=" px-4 py-2 hover:text-green-100 text-sm"
                onClick={() => setShowDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                to="/courses"
                className=" px-4 py-2 hover:text-green-100 text-sm"
                onClick={() => setShowDropdown(false)}
              >
                Courses
              </Link>
              <Link
                to="/"
                className=" px-4 py-2 hover:text-green-100 text-sm"
                onClick={() => setShowDropdown(false)}
              >
                Log Out
              </Link>
            </div>
          )}
        </div>

        <button className="hidden max-sm:flex text-2xl mt-2 ml-auto" onClick={handleMobileToggle}>
          <FaBars />
        </button>

        {showMobileMenu && (
          <ul className="w-full mt-3 hidden max-sm:flex flex-col gap-3">
            <li><Link to="/" onClick={() => setShowMobileMenu(false)} className="block py-2 px-3 rounded hover:bg-green-600">Home</Link></li>
            <li><Link to="/coding" onClick={() => setShowMobileMenu(false)} className="block py-2 px-3 rounded hover:bg-green-600">Competition</Link></li>
            <li><Link to="/courses" onClick={() => setShowMobileMenu(false)} className="block py-2 px-3 rounded hover:bg-green-600">Courses</Link></li>
            <li><Link to="/learning" onClick={() => setShowMobileMenu(false)} className="block py-2 px-3 rounded hover:bg-green-600">Learning</Link></li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
