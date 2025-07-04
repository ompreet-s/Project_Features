import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaFilter } from 'react-icons/fa';

const CourseNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartCount(stored.length);

    const interval = setInterval(() => {
      const updated = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartCount(updated.length);
    }, 300); 

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-[#2d3150] text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">CodeBridge Courses</h1>
      <div className="flex items-center gap-6 max-sm:hidden">
        <button onClick={toggleSidebar} className="hover:text-green-300 flex items-center gap-1 cursor-pointer">
          <FaFilter /> Filters
        </button>
        <button onClick={() => navigate("/cart")} className="relative ">
          <FaShoppingCart className="text-2xl cursor-pointer hover:text-green-300" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 rounded-full ">
              {cartCount}
            </span>
          )}
        </button>
        <button onClick={() => navigate("/coding")} className="bg-orange-500  text-white px-4 py-1 rounded cursor-pointer">
          Home
        </button>
      </div>
    </nav>
  );
};

export default CourseNavbar;