import React from 'react';

const CourseCard = ({ course, onEnroll }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg w-80 max-sm:w-70">
      <img src={course.image} alt={course.title} className="h-40 w-full object-cover rounded " />
      <h3 className="text-lg font-bold mt-2">{course.title}</h3>
      <p className="text-gray-600 text-sm">{course.description}</p>
      <p className="text-blue-700 font-semibold my-1">₹{course.price}</p>
      <button onClick={() => onEnroll(course)} className="bg-blue-600 text-white w-full mt-2 py-2 rounded cursor-pointer">
        Enroll
      </button>
    </div>
  );
};

export default CourseCard;
