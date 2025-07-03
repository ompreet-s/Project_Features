// StudentLoginModal.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLoginModal = ({ onClose }) => {

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Student / Jobseeker Login</h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
              placeholder="minimum 8 characters"
            />
          </div>
          <button onClick={()=>navigate("/coding")} className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLoginModal;
