import React from 'react';

const CourseCard = ({ course, onEnroll }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-72">
      <img src={course.image} alt={course.title} className="h-40 w-full object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{course.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{course.description}</p>
      <button
        onClick={() => onEnroll(course)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Enroll
      </button>
    </div>
  );
};

export default CourseCard;
