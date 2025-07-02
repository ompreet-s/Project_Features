import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Login from './Login';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="bg-[#2d3150] text-white px-10 py-3 flex justify-between items-center">
        <ul className="flex items-center space-x-6">
         
          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-orange-400 text-xl">
              <FaHome />
              <span className='text-md'>Home</span>
            </Link>
          </li>

         
          <li>
            <Link to="/coding" className="hover:text-orange-400">COMPETITION</Link>
          </li>

        
          <li>
            <Link to="/courses" className="hover:text-orange-400">COURSES</Link>
          </li>

          <li>
            <Link to="/learning" className="hover:text-orange-400">LEARNING</Link>
          </li>
        </ul>


        <div>
          
          <button className="list-none">
            <a href="#" onClick={() => setShowLogin(true)} className="hover:text-orange-400 hover:bg-indigo-950 border-orange-400 px-7 py-2 rounded-xl border-2">LOGIN</a>
          </button>
        </div>
      </nav>


      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
