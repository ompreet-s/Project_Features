import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [feedbackList, setFeedbackList] = useState([]);

  const handleScroll = (dir) => {
    const scrollAmount = 320;
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5001/feedback")
      .then(res => setFeedbackList(res.data))
      .catch(err => console.error("GET Error:", err));
  }, []);

  return (
    <section className="bg-[#f8f9fb] px-30 py-10">
      <p className="text-sm font-semibold text-purple-600 uppercase mb-2">Testimonials</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">What our clients are saying</h2>
      <p className="text-gray-700 mb-6">
        <a href="#" className="underline font-medium">Hundreds of reviews</a> showcase why users trust CodeBridge.
      </p>

      <div className="flex justify-end gap-3 mb-6">
        <button onClick={() => handleScroll("left")} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
          <FaArrowLeft />
        </button>
        <button onClick={() => handleScroll("right")} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
          <FaArrowRight />
        </button>
      </div>

      <div ref={scrollRef} className="flex overflow-x-scroll gap-4 py-4 scrollbar-hide">
        {feedbackList.map((item, idx) => (
          <TestimonialCard
            key={idx}
            name={item.name}
            review={item.review}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
