import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = ({ onStudentLoginClick }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className="bg-white text-[#2d2d2d] px-6 py-4 flex justify-between items-center shadow max-sm:flex-wrap max-lg:flex-wrap max-xl:flex-wrap">
      
      <div className="flex items-center space-x-2 font-bold text-xl">
        <span className="bg-black text-white px-2 py-1 rounded">C</span>
        <span className="text-black">CodeBridge</span>
      </div>

      <div className="flex items-center gap-14 m-auto text-sm font-medium text-gray-700 max-sm:order-2 max-sm:gap-6 max-sm:flex-wrap max-sm:justify-around max-sm:mt-6 max-lg:order-2 max-lg:mt-10 max-xl:order-2 max-xl:gap-20 max-xl:mt-5">
        

        <div className="relative">
          <h3 onClick={() => handleToggle(0)} className="flex items-center gap-1 cursor-pointer hover:text-black">
            Products <MdKeyboardArrowDown />
          </h3>
          {openIndex === 0 && (
            <div className="absolute top-full mt-2 w-44 bg-white rounded shadow-lg py-2 z-50">
              <a href="#product" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Hackathons</a>
              <a href="#product" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Skill Assessments</a>
              <a href="#product" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Facecode Interviews</a>
              <a href="#product" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Learning & Development</a>
              <a href="#product" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Team Engagement</a>
            </div>
          )}
        </div>


        <div className="relative">
          <h3 onClick={() => handleToggle(1)} className="flex items-center gap-1 cursor-pointer hover:text-black">
            Features <MdKeyboardArrowDown />
          </h3>
          {openIndex === 1 && (
            <div className="absolute top-full mt-2 w-44 bg-white rounded shadow-lg py-2 z-50">
              <a href="#feature" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Live Editor</a>
              <a href="#feature" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Analytics</a>
              <a href="#feature" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Proctoring</a>
              <a href="#feature" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Collaboration Tools</a>
            </div>
          )}
        </div>

       
        <div className="relative">
          <h3 onClick={() => handleToggle(2)} className="flex items-center gap-1 cursor-pointer hover:text-black">
            Solutions <MdKeyboardArrowDown />
          </h3>
          {openIndex === 2 && (
            <div className="absolute top-full mt-2 w-44 bg-white rounded shadow-lg py-2 z-50">
              <a href="#collaborate" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 ">For Recruiters</a>
              <a href="#collaborate" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">For Colleges</a>
              <a href="#collaborate" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">For Developers</a>
            </div>
          )}
        </div>

        <div className="relative">
          <h3 onClick={() => handleToggle(3)} className="flex items-center gap-1 cursor-pointer hover:text-black">
            About Us <MdKeyboardArrowDown />
          </h3>
          {openIndex === 3 && (
            <div className="absolute top-full mt-2 w-44 bg-white rounded shadow-lg py-2 z-50">
              <a href="#team" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Portfolio</a>
              <a href="#team" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Contact Us</a>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-700">
        <li className="block px-4 py-2 hover:bg-gray-100 text-sm list-none max-sm:hidden">
          <a href="#recruiter">For Recruiters</a>
        </li>

        <button
          onClick={onStudentLoginClick}
          className="hover:bg-gray-800 hover:text-white border border-gray-300 text-md px-7 py-2 rounded cursor-pointer"
        >
          Log In
        </button>

        <button
          onClick={onStudentLoginClick}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 font-semibold cursor-pointer max-sm:hidden"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
