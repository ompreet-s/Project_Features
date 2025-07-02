import React, { useState } from "react";


const HackathonPage = () => {
  const [activeTab, setActiveTab] = useState("LIVE");

  const challenges = [
    {
      id: 1,
      company: "Cepheid",
      type: "HIRING",
      title: "Cepheid Hiring Challenge 2025",
      endsIn: "05 : 03 : 19",
      participants: null,
      image:"react/coding-app/src/assets/one.png",
    },
    {
      id: 2,
      company: "Lyzr.ai",
      type: "HACKATHON",
      title: "Lyzr AI Architect Challenge",
      endsIn: "19 : 03 : 15",
      participants: 1579,
      image:"react/coding-app/src/assets/two.png", 
    },
    {
      id: 3,
      company: "Intel",
      type: "HACKATHON",
      title: "NextGen IoT Innovation Challenge",
      endsIn: "10 : 05 : 42",
      participants: 1239,
      image: "https://via.placeholder.com/300x180?text=Lyzr+AI", 
    },
    {
      id: 4,
      company: "IBM Quantum",
      type: "HACKATHON",
      title: "Quantum Code Quest 2025",
      endsIn: "14 : 08 : 05",
      participants: 879,
      image: "https://via.placeholder.com/300x180?text=Lyzr+AI", 
    },
  ];

  const tabs = [
    { name: "LIVE", count: 2 },
    { name: "UPCOMING", count: 1 },
    { name: "PREVIOUS" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Hackathons, Programming Challenges, And Coding Competitions
      </h2>

      {/* Tabs */}
      <div className="flex items-center space-x-6 border-b pb-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`relative pb-1 font-medium ${
              activeTab === tab.name
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
            {tab.count && (
              <span className="ml-1 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Cards */}
      {activeTab === "LIVE" && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white border rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={challenge.image}
                alt={challenge.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-gray-500 uppercase">{challenge.type}</p>
                <h3 className="text-md font-semibold text-gray-800 truncate">
                  {challenge.title}
                </h3>
                <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                  {challenge.participants !== null ? (
                    <span>👥 {challenge.participants}</span>
                  ) : (
                    <span>🎯 Hiring</span>
                  )}
                  <span>Ends in: {challenge.endsIn}</span>
                </div>
                <button className="mt-4 w-full bg-lime-500 hover:bg-lime-600 text-white py-2 font-bold rounded">
                  START NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Optional placeholder for UPCOMING and PREVIOUS */}
      {activeTab !== "LIVE" && (
        <div className="text-gray-500 mt-10 text-center">
          No {activeTab.toLowerCase()} challenges available.
        </div>
      )}
    </div>
  );
};

export default HackathonPage;