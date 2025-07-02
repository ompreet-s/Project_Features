import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Login from './Login'; // import here

const Navbar = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="bg-[#2d3150] text-white px-10 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 hover:text-orange-400"
          >
            <FaHome />
            <span className="text-sm">Home</span>
          </button>

          <a href="#">COMPETITION</a>

          <button
            onClick={() => navigate("/courses")}
            className="hover:text-orange-400"
          >
            COURSES
          </button>

          <button onClick={() => navigate("/learning")} className="hover:text-orange-400">
          LEARNING
        </button>
        </div>

        <div className="flex space-x-4 items-center">
          <input
            type="text"
            placeholder="Search developers, problems, etc"
            className="bg-[#424569] px-2 py-1 text-sm text-white rounded"
          />
          <a href="#" onClick={() => setShowLogin(true)}>LOGIN</a>
        </div>
      </nav>

      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )}
    </>
  );
};

export default Navbar;
