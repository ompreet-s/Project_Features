import React from "react";
import img1 from "../assets/supreet.jpg";
import img2 from "../assets/rishabh.jpg";
import img3 from "../assets/ompreet.jpg";
import img4 from "../assets/munna.jpg";

const teamMembers = [
  {
    name: "Supreet Mohapatra",
    role: "Front-end Developer",
    image: img1,
  },
  {
    name: "Rishabh Kumar",
    role: "Full-Stack Developer",
    image: img2,
  },
  {
    name: "Ompreet Mohapatra",
    role: "Front-end Developer",
    image: img3,
  },
  {
    name: "Munna Nayak",
    role: "Full-Stack Developer",
    image: img4,
  },
];

const Team = () => {
  return (
    <div className=" bg-white py-16 px-6 ">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>

      <div className="flex flex-wrap justify-center gap-10 max-xl:grid-cols-2 max-xl:gap-x-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-80 h-[400px] bg-gray-100 rounded-xl shadow-md overflow-hidden text-center transition transform hover:scale-105 max-md:h-[320px] max-sm:w-50 max-sm:h-[200px] max-xl:w-100 max-2xl:w-70">
            <div className="h-80  w-full max-md:h-60 max-sm:h-30 ">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full  grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl max-sm:text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
