import React from 'react';

const LearningCard = ({ course, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-4 shadow-md rounded hover:scale-105 transition"
    >
      <img src={course.image} alt={course.title} className="rounded w-full mb-3" />
      <h3 className="font-bold">{course.title}</h3>
      <p className="text-sm text-gray-600">⏱ {course.duration}</p>
    </div>
  );
};

export default LearningCard;
