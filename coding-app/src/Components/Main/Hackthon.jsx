import React, { useState } from "react";
import HackathonCard from "./HackathonCard";
import {
  liveChallenges,
  upcomingChallenges,
  previousChallenges,
} from "./hackathonData";

const Hackthon = () => {
  const [activeTab, setActiveTab] = useState("LIVE");

  const tabs = [
    { name: "LIVE", count: liveChallenges.length },
    { name: "UPCOMING", count: upcomingChallenges.length },
    { name: "PREVIOUS", count: previousChallenges.length },
  ];

  const getChallenges = () => {
    if (activeTab === "LIVE") return liveChallenges;
    if (activeTab === "UPCOMING") return upcomingChallenges;
    if (activeTab === "PREVIOUS") return previousChallenges;
    return [];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Hackathons, Programming Challenges, and Coding Competitions
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
            <span className="ml-1 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {getChallenges().map((challenge) => (
          <HackathonCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default Hackthon;
