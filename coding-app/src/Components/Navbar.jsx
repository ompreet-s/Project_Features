import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useNavigate, Link } from "react-router-dom";

const dropdownData = [
  {
    label: "Products",
    items: [
      "Hackathons",
      "Skill Assessments",
      "Facecode Interviews",
      "Learning & Development",
      "Team Engagement",
    ],
  },
  {
    label: "Features",
    items: ["Live Editor", "Analytics", "Proctoring", "Collaboration Tools"],
  },
  {
    label: "Solutions",
    items: ["For Recruiters", "For Colleges", "For Developers"],
  },
  {
    label: "About Us",
    items: ["Portfolio", "Contact us"],
  },
];

const Navbar = ({ onStudentLoginClick }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <nav className="bg-white text-[#2d2d2d] px-6 py-4 flex justify-between items-center shadow">
      
      <div className="flex items-center space-x-2 font-bold text-xl">
        <span className="bg-black text-white px-2 py-1 rounded">C</span>
        <span className="text-black">CodeBridge</span>
      </div>

      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
        {dropdownData.map((menu, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <button className="flex items-center gap-1 hover:text-black">
              {menu.label}
              <MdKeyboardArrowDown />
            </button>
            {openIndex === index && (
              <div className="absolute top-full mt-2 w-56 bg-white text-black rounded shadow-lg py-2 z-50">
              {menu.items.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-700">
      <li className="block px-4 py-2 hover:bg-gray-100 text-sm list-none">
  <Link to="/recruiter">For Recruiters</Link>
</li>
        
        <button onClick={onStudentLoginClick} className="hover:bg-gray-800 hover:text-white border border-gray-300 text-md px-7 py-2 rounded cursor-pointer">Log In</button>

        <button
          onClick={() => navigate("/coding")}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 font-semibold cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
