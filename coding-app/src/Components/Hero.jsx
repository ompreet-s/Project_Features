import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#0033ff] via-[#977dff] to-[#ffccf2]  text-white text-center py-24 px-6 ">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Find and engage top talent by evaluating<br />
        technical and soft skills
      </h1>
      <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
        Empower your tech hiring with LearnX’s trusted platform offering skill assessments, competitions,
        and access to a student learning community.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <button className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200">
          For Recruiters/Colleges
        </button>
        <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-purple-800">
          For Students/Jobseekers
        </button>
      </div>
    </div>
  );
};

export default Hero;
