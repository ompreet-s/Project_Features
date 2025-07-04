import React from "react";

const features = [
  {
    title: "Live Editor",
    desc: "Code and preview in real-time with built-in syntax highlighting.",
  },
  {
    title: "Analytics",
    desc: "Track progress and engagement with insightful reports.",
  },
  {
    title: "Proctoring",
    desc: "Ensure assessment integrity through smart monitoring.",
  },
  {
    title: "Collaboration Tools",
    desc: "Pair program and collaborate live with shared editors.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#f5f7fa] via-[#f0f4ff] to-[#fdf3f3] py-20 px-6 max-xl:py-10">
      <div className="max-w-6xl mx-auto px-4">
      
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
            Core Platform Features
          </h2>
          <p className="text-gray-600 text-md">
            Empowering your coding journey with tools that matter.
          </p>
        </div>

       
        <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="w-full rounded-xl py-6 px-6 border border-gray-200 bg-gradient-to-br 
              from-white via-[#f9f9ff] to-[#fff8e7] 
              hover:from-[#e0e0f0] hover:via-[#d6ccff] hover:to-[#f8e6ff] 
              hover:text-white hover:shadow-xl hover:shadow-purple-200 
              transition-all duration-300 ease-in-out transform hover:scale-105 max-2xl:py-10 max-2xl:px-10"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
