import React from "react";

const Recruiter = () => {
  return (
    <div className="bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] py-16 px-6  text-center">
      <h2 className="text-3xl  font-bold text-gray-800 mb-4 animate-fade-down">
        For Recruiters and Hiring Teams
      </h2>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-up delay-150">
        Host exciting hackathons, launch branded courses, and engage with top developer talent.
        CodeBridge helps you hire smarter and faster.
      </p>

      <div className="grid grid-cols-3  gap-6 max-w-7xl mx-auto">

        <div className="bg-blue-100 hover:bg-blue-200 p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-up">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Host Hackathons</h3>
          <p className="text-sm text-blue-900">
            Launch engaging coding contests to assess skills and creativity on our platform.
          </p>
        </div>

     
        <div className="bg-pink-100 hover:bg-pink-200 p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-up delay-100">
          <h3 className="text-xl font-bold text-pink-800 mb-2">Offer Courses</h3>
          <p className="text-sm text-pink-900">
            Provide custom learning tracks and certifications to upskill and shortlist candidates.
          </p>
        </div>

       
        <div className="bg-green-100 hover:bg-green-200 p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-up delay-200">
          <h3 className="text-xl font-bold text-green-800 mb-2">Build Talent Pipeline</h3>
          <p className="text-sm text-green-900">
            Track performance and hire top talent directly from your hosted events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;
