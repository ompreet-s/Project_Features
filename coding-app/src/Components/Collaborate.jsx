import React from 'react';
import { useNavigate } from "react-router-dom";

const Collaborate = () => {
 
  const navigate = useNavigate();

  return (
    <div className="w-full text-white text-center py-30 px-4 bg-gradient-to-r from-[#0033ff] via-[#977dff] to-[#ffccf2] max-sm:py-10 max-lg:px-10 max-lg:py-20">
      <h2 className="text-5xl font-bold mb-15 max-md:text-4xl max-sm:text-xl max-sm:mb-5">
        Ready to build exceptional tech teams?
      </h2>
      <p className="max-w-3xl mx-auto text-lg mb-8 max-md:max-w-2xl max-sm:hidden">
        Join thousands of companies transforming their hiring with CodeBridge.
        Streamline your recruitment process, discover top talent, and drive
        innovation—all in one trusted platform.
      </p>
      <button onClick={() => navigate("/coding")} className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow-m hover:bg-gray-200 transition ">
      Get Started
      </button>
    </div>
  );
};

export default Collaborate;
