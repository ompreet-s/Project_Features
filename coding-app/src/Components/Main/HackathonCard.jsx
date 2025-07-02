import React, { useEffect, useState } from "react";

const HackathonCard = ({ challenge }) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (!challenge.endTime) {
      setIsLive(false);
      return;
    }

    const interval = setInterval(() => {
      const now = new Date();
      const endTime = new Date(challenge.endTime);
      const diff = endTime - now;

      if (diff <= 0) {
        setTimeLeft("Ended");
        setIsLive(false);
        clearInterval(interval);
      } else {
        setIsLive(true);
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(
          `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(
            2,
            "0"
          )} : ${String(seconds).padStart(2, "0")}`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [challenge.endTime]);

  return (
    <>
      <div className="bg-white border rounded-lg shadow hover:shadow-md transition">
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
            {challenge.endTime && <span>Ends in: {timeLeft}</span>}
          </div>

          <button
            className={`mt-4 w-full py-2 font-bold rounded ${
              isLive
                ? "bg-lime-500 hover:bg-lime-600 text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!isLive}
            onClick={() => isLive && setShowModal(true)}
          >
            START NOW
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md text-center relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold mb-3">Participation Info</h3>
            <p className="text-sm text-gray-700 mb-4">
              To participate in <strong>{challenge.title}</strong>, please follow this link:
            </p>
            <a
              href="#"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              https://hackathons.example.com/join/{challenge.id}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default HackathonCard;
