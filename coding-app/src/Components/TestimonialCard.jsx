import React from "react";

const TestimonialCard = ({ name, review, rating }) => {
  return (
    <div className=" bg-gradient-to-r from-[#fdfbfb] via-[#ebedee] to-[#dfe9f3] p-6 rounded-lg border border-gray-200 shadow-lg w-72 shrink-0 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl max-sm:w-50">
      <h3 className="text-lg font-semibold text-black-800 mb-2">{name}</h3>
      <p className="text-sm text-yellow-600 mb-2">Rating: {rating}/5</p>
      <p className="text-sm text-gray-700">{review}</p>
    </div>
  );
};

export default TestimonialCard;
