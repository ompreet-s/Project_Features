import React from "react";

const features = [
  {
    title: "Live Editor",
    desc: "Code in real-time with instant preview and syntax support.",
  },
  {
    title: "Analytics",
    desc: "Track user activity and evaluate performance with precision.",
  },
  {
    title: "Proctoring",
    desc: "AI-driven monitoring ensures fairness in assessments.",
  },
  {
    title: "Collaboration Tools",
    desc: "Team up with others using live sessions and shared code space.",
  },
];

const Features = () => {
  return (
    <div className="bg-[#F9F8F8] py-20 px-8 ">
      <div className="flex flex-col gap-10 ">
        
        <div className="w-xl text-center m-auto">
          <h2 className="text-5xl font-bold text-[#2d2e4a] leading-tight">
            Power That Drives <br /> Smart Development
          </h2>
          <p className="text-gray-600 mt-6 text-lg">
            Everything you need to build, collaborate, and assess – all in one place.
          </p>
        </div>

        <div className=" flex justify-evenly gap-20 w-7xl m-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl py-10 px-10 border border-gray-200  bg-gradient-to-br from-white via-[#f9f9ff] to-[#fff8e7] 
             hover:from-[#e0e0f0] hover:via-[#d6ccff] hover:to-[#f8e6ff] hover:text-white hover:shadow-xl hover:shadow-purple-200
              hover:scale-[1.4] transition-all duration-300 ease-in-out">
              <h4 className="text-xl font-semibold text-[#2d2e4a] mb-2">{feature.title}</h4>
              <p className="text-gray-700 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
