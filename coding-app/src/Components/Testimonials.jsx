import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";


const fallbackTestimonials = [
  {
    name: "Ananya U.",
    review:
      "Helped us in better screening at the start of the hiring process; thus helping our internal team to interview the best of best folks.",
    rating: "5",
  },
  {
    name: "Neeraj K.",
    review:
      "I was given the CodeBridge assessments by various companies as the first round of shortlisting. Great experience!",
    rating: "4",
  },
  {
    name: "Ram P.",
    review:
      "CodeBridge helped streamline our tech hiring process significantly with real-time assessments.",
    rating: "5",
  },
  {
    name: "Krishna P.",
    review:
      "CodeBridge helped streamline our tech hiring process significantly with real-time assessments.",
    rating: "5",
  },
  {
    name: "Radha P.",
    review:
      "CodeBridge helped streamline our tech hiring process significantly with real-time assessments.",
    rating: "5",
  },
  {
    name: "Sundar P.",
    review:
      "CodeBridge helped streamline our tech hiring process significantly with real-time assessments.",
    rating: "5",
  },
  {
    name: "Guest P.",
    review:
      "CodeBridge helped streamline our tech hiring process significantly with real-time assessments.",
    rating: "5",
  },
  
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [feedbackList, setFeedbackList] = useState([]);

  const handleScroll = (dir) => {
    const scrollAmount = 320;
  
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  

  useEffect(() => {
    axios
      .get("http://localhost:5001/feedback")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setFeedbackList(res.data);
        } else {
          setFeedbackList(fallbackTestimonials);
        }
      })
      .catch((err) => {
        console.error("GET Error:", err);
        setFeedbackList(fallbackTestimonials);
      });
  }, []);

  return (
    <div className="bg-[#f7f8ff] px-30 py-10 max-md:px-10 max-lg:px-10 max-xl:px-15">
      <p className="text-lg font-semibold text-purple-600 uppercase mb-2">Testimonials</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">What our clients are saying</h2>
      <p className="text-gray-700 mb-6 max-sm:mb-3">
        <a href="" className="underline font-medium">Hundreds of reviews</a> showcase why users trust CodeBridge.
      </p>

      <div className="flex justify-end gap-3 mb-6 max-sm:mb-4">
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
    </div>
  );
};

export default Testimonials;
