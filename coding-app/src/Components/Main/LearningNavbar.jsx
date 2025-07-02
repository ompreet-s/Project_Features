import React from 'react';
import { useNavigate } from 'react-router-dom';

const LearningNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#2d3150] text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Learning Portal</h1>
      <button onClick={() => navigate("/coding")} className="bg-orange-500 px-4 py-1 rounded cursor-pointer">
        Back to Home
      </button>
    </nav>
  );
};

export default LearningNavbar;
