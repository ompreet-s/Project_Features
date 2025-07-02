import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#2d3150] text-white px-4 py-3 flex justify-between items-center">
      
      <div className="flex items-center space-x-6">
        {/* Home Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 hover:text-orange-400"
        >
          <FaHome />
          <span className="text-sm">Home</span>
        </button>

        {/* Other Menu */}
        <a href="#">COMPETITION</a>

        {/* 🔥 Updated Course link */}
        <button
          onClick={() => navigate("/courses")}
          className="hover:text-orange-400"
        >
          COURSES
        </button>

        <a href="#">LEARNING</a>
        <a href="#">PRACTICE</a>
      </div>

      <div className="flex space-x-4 items-center">
        <input
          type="text"
          placeholder="Search developers, problems, etc"
          className="bg-[#424569] px-2 py-1 text-sm text-white rounded"
        />
        <a href="#">LOGIN</a>
        <button className="border border-orange-400 text-orange-400 px-3 py-1 rounded">
          SIGN UP
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
