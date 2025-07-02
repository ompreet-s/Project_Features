import React from 'react';

const Login = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Login as student/jobseeker</h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
