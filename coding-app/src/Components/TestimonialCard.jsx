import React from "react";

const TestimonialCard = ({ name, review, rating }) => {
  return (
    <div className="bg-white p-4 rounded-md border shadow-sm w-64 shrink-0">
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-1">Rating: {rating}/5</p>
      <p className="text-sm text-gray-600">{review}</p>
    </div>
  );
};

export default TestimonialCard;
