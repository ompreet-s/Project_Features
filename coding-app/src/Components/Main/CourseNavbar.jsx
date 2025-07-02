import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaFilter } from 'react-icons/fa';

const CourseNavbar = ({ cartCount, toggleSidebar, onCartClick }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#2d3150] text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">CodeBridge Courses</h1>
      <div className="flex items-center gap-6">
        <button onClick={toggleSidebar} className="hover:text-gray-300 flex items-center gap-1">
          <FaFilter /> Filters
        </button>
        <button onClick={onCartClick} className="relative">
          <FaShoppingCart className="text-2xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
        <button onClick={() => navigate("/coding")} className="bg-orange-500 text-white px-4 py-1 rounded">
          Home
        </button>
      </div>
    </nav>
  );
};

export default CourseNavbar;
