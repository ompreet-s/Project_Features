import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  "https://img.freepik.com/premium-vector/blue-gradient-color-background-with-line-ornament-abstract-modern-blue-background_794573-2340.jpg",
  "https://static.vecteezy.com/system/resources/previews/017/744/080/large_2x/blue-artificial-intelligence-technology-background-hd-free-photo.jpg",
  "https://img.freepik.com/free-vector/wavy-background-concept_23-2148497712.jpg?semt=ais_items_boosted&w=740",
  "https://imgcdn.stablediffusionweb.com/2024/9/9/41e2f8c9-f7db-4697-b11a-96f38effafdf.jpg"
];

const Hero = ({ onStudentClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;


  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);


  const goToNext = () => {
    if (currentIndex < totalImages - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };


  const goToPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalImages - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-[90vh] text-white text-center overflow-hidden">

      <img
        src={images[currentIndex]}
        alt="Coding Banner"
        className="w-full h-full object-cover absolute "
      />


      <div className="absolute "></div>

      <div className="relative  py-30 px-6">
        <h1 className="text-6xl  font-bold leading-tight mb-10">
          Find and engage top talent by evaluating<br />
          technical and soft skills
        </h1>
        <p className="text-xl  mb-10 max-w-3xl mx-auto">
          Empower your tech hiring with LearnX’s trusted platform offering skill assessments, competitions,
          and access to a student learning community.
        </p>
        <div className="flex justify-center">
          <button
            onClick={onStudentClick}
            className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-purple-800"
          >
            For Students/Jobseekers
          </button>
        </div>
      </div>

      <div className="absolute left-5 top-[50%] transform -translate-y-[50%] ">
        <button onClick={goToPrev} className="bg-black p-5 rounded-full hover:bg-black cursor-pointer">
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute right-5 top-[50%] transform -translate-y-[50%] ">
        <button onClick={goToNext} className="bg-black p-5 rounded-full hover:bg-black cursor-pointer">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
