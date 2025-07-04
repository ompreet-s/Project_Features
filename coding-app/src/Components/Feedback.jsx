import React, { useState } from "react";
import axios from "axios";
import image from "../assets/feedback.png";

const Feedback = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("5");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !review || !rating) {
      setError("All fields are required");
      return;
    }

    const data = { name, review, rating };

    axios.post("http://localhost:5001/feedback", data)
      .then(() => {
        setSuccess(true);
        setName("");
        setReview("");
        setRating("5");
        setError("");
      })
      .catch(() => setError("Submission failed"));
  };

  return (
    <div className="bg-gray-100 py-10 px-6 max-md:py-10 max-lg:py-10">
      <div className="max-w-6xl mx-auto flex flex-row  items-center gap-10">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md w-1/2 max-md:w-md max-lg:w-lg max-xl:w-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 max-sm:text-xl">Leave Your Feedback</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 mb-3 w-full rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Your Review"
            className="border p-2 mb-3 w-full rounded resize-none"
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <select
            className="border p-2 mb-4 w-full rounded"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Submit
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-600 mt-2">Thanks for your feedback!</p>}
        </form>

        <div className="w-lg h-md max-md:w-sm max-md:h-sm max-sm:hidden max-lg:w-md max-lg:h-md max-xl:h-lg max-xl:w-lg">
          <img src={image} alt="Feedback" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
