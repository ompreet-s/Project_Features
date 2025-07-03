import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onStudentLoginClick }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <nav className="bg-white text-[#2d2d2d] px-6 py-4 flex justify-between items-center shadow">
      
      
      <div className="flex items-center space-x-2 font-bold text-xl">
        <span className="bg-black text-white px-2 py-1 rounded">C</span>
        <span className="text-black">CodeBridge</span>
      </div>

     
      <div className="flex items-center gap-14 m-auto text-sm font-medium text-gray-700">

        
        <div
          className="relative"
          onMouseEnter={() => setOpenIndex(0)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          <Link to="/product" className="flex items-center gap-1 hover:text-black">
            Products <MdKeyboardArrowDown />
          </Link>
          {openIndex === 0 && (
            <div className="absolute top-full mt-2 w-44 bg-white rounded shadow-lg py-2 z-50">
              <Link to="/product" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Hackathons</Link>
              <Link to="/product" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Skill Assessments</Link>
              <Link to="/product" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Facecode Interviews</Link>
              <Link to="/product" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Learning & Development</Link>
              <Link to="/product" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Team Engagement</Link>
            </div>
          )}
        </div>

       
        <div
          className="relative"
          onMouseEnter={() => setOpenIndex(1)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          <Link to="/features" className="flex items-center gap-1 hover:text-black">
            Features <MdKeyboardArrowDown />
          </Link>
          {openIndex === 1 && (
            <div className="absolute top-full mt-2 w-44 bg-white rounded shadow-lg py-2 z-50">
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Live Editor</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Analytics</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Proctoring</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Collaboration Tools</a>
            </div>
          )}
        </div>

        
        <div
          className="relative"
          onMouseEnter={() => setOpenIndex(2)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          <Link to="/collaborate" className="flex items-center gap-1 hover:text-black">
            Solutions <MdKeyboardArrowDown />
          </Link>
          {openIndex === 2 && (
            <div className="absolute top-full mt-2 w-44 bg-white rounded shadow-lg py-2 z-50">
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">For Recruiters</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">For Colleges</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">For Developers</a>
            </div>
          )}
        </div>

      
        <div
          className="relative"
          onMouseEnter={() => setOpenIndex(3)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          <Link to="/about" className="flex items-center gap-1 hover:text-black">
            About Us <MdKeyboardArrowDown />
          </Link>
          {openIndex === 3 && (
            <div className="absolute top-full mt-2 w-44 bg-white rounded shadow-lg py-2 z-50">
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Portfolio</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Contact Us</a>
            </div>
          )}
        </div>
      </div>

      
      <div className="flex items-center gap-4 text-sm text-gray-700">
        <li className="block px-4 py-2 hover:bg-gray-100 text-sm list-none">
          <Link to="/recruiter">For Recruiters</Link>
        </li>

        <button
          onClick={onStudentLoginClick}
          className="hover:bg-gray-800 hover:text-white border border-gray-300 text-md px-7 py-2 rounded cursor-pointer"
        >
          Log In
        </button>

        <button
          onClick={onStudentLoginClick}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 font-semibold cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
