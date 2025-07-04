import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLoginModal = ({ onClose }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password");
      return;
    }

    setError('');
    navigate('/coding');
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative max-sm:w-[300px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-black "
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center mt-5">Student / Jobseeker Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
              placeholder="minimum 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 cursor-pointer">
            Login
          </button>


          {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default StudentLoginModal;
