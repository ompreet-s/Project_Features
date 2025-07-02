import React from 'react';
import { useNavigate } from 'react-router-dom';
import { learningCourses } from './learningData';
import LearningNavbar from './LearningNavbar';
import LearningCard from './LearningCard';
import { MdSubscriptions } from 'react-icons/md';

const Learning = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    alert("🎉 Thank you for subscribing to our learning platform!");
  };

  return (
    <div>
      <LearningNavbar />
      <h1 className='m-auto text-5xl text-center mt-5 mb-5'>Watch Free Learning Videos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {learningCourses.map(course => (
          <LearningCard
            key={course.id}
            course={course}
            onClick={() => navigate(`/learning/${course.id}`)}
          />
        ))}
      </div>

      
      <div className="flex justify-center mt-10 mb-16">
        <button
          onClick={handleSubscribe}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg flex items-center gap-3 transition duration-300"
        >
          <MdSubscriptions className="text-2xl" />
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Learning;
