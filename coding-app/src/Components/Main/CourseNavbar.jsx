import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const CoursesNavbar = ({ cartCount, toggleCart }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#2d3150] text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">CodeBridge Courses</h1>
      <div className="space-x-6 flex items-center">
        <a href="#" className="hover:text-gray-300">Courses</a>
        <a href="#" className="hover:text-gray-300">Practice</a>
        <a href="#" className="hover:text-gray-300">Leaderboard</a>
        <button onClick={() => navigate("/coding")} className="bg-orange-500 text-white px-4 py-1 rounded">Home</button>
        
        <div className="relative cursor-pointer" onClick={toggleCart}>
          <FaShoppingCart className="text-xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CoursesNavbar;
