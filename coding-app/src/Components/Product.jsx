import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Product = () => {
  const [openId, setOpenId] = useState(null);
  const navigate = useNavigate(); 

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleCardClick = () => {
    navigate("/coding"); 
  };

  const data = [
    {
      id: "hackathons",
      title: "Hackathons",
      desc: "Organize coding competitions to find top talent.",
      icon: "https://tse2.mm.bing.net/th/id/OIP._8m1lt7Ek4l3qH_34Ms8gAHaE7?pid=Api&P=0&h=220",
      points: ["✔ Timed coding challenges", "✔ Leaderboard", "✔ Events", "✔ Engagement"],
      details: [
        {
          img: "https://img.yicaiglobal.com/src/image/2024/06/58140593003205.jpg",
          title: "AI Code Sprint",
          date: "March 10 - March 15",
        },
        {
          img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=60",
          title: "Frontend Fest",
          date: "April 1 - April 7",
        },
      ],
    },
    {
      id: "learning",
      title: "Learning & Development",
      desc: "Structured learning paths and upskilling.",
      icon: "https://img.icons8.com/color/96/000000/training.png",
      points: ["✔ Guided paths", "✔ Hands-on coding", "✔ Progress tracking", "✔ Certificates"],
      details: [
        {
          img: "https://m.media-amazon.com/images/I/81EUH55ABRL.SL1500.jpg",
          title: "React Beginner to Pro",
          date: "Intermediate",
        },
        {
          img: "https://i.ytimg.com/vi/Qmt0QwzEmh0/maxresdefault.jpg",
          title: "DSA Mastery",
          date: "Advanced",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">💼 Our Offerings</h2>
      <div className="flex flex-wrap gap-6 justify-center items-start max-md:flex-col max-lg:flex-col  ">
        {data.map((section) => (
          <div key={section.id} className="bg-white p-5 rounded shadow w-[48%] max-md:w-full max-lg:w-full ">
            <div className="flex gap-7 max-sm:flex-col">
              <img src={section.icon} alt={section.title} className="w-20 h-20" />
              <div>
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <p className="text-gray-600 text-xl mb-4">{section.desc}</p>
                <ul className="list-disc pl-5 mt-2 text-gray-700 text-lg">
                  {section.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                <button
                  onClick={() => handleToggle(section.id)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded max-sm:w-[200px]"
                >
                  {openId === section.id ? "Hide Details" : `Explore ${section.title}`}
                </button>
              </div>
            </div>

            {openId === section.id && (
              <div className="mt-4 border-t pt-4">
                <h4 className="text-blue-700 font-semibold mb-2">Details:</h4>
                <div className="flex gap-3 max-sm:flex-col ">
                  {section.details.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 p-3 rounded cursor-pointer  hover:bg-blue-50 transition"
                      onClick={handleCardClick}
                    >
                      <img src={item.img} alt={item.title} className="w-full h-40  rounded" />
                      <h5 className="font-bold mt-2">{item.title}</h5>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
