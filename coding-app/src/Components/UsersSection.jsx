import React from 'react';

const usersData = [
  {
    title: "Students and Professionals",
    desc: "Unlock Your Potential: Compete, Build Resume, Grow and get Hired!",
    img: "https://img.freepik.com/free-photo/happy-student-holding-files_23-2147658903.jpg",
    bg: "bg-blue-100",
  },
  {
    title: "Companies and Recruiters",
    desc: "Discover Right Talent: Hire, Engage, and Brand Like Never Before!",
    img: "https://img.freepik.com/free-photo/business-woman-posing_23-2148126085.jpg",
    bg: "bg-purple-100",
  },
  {
    title: "Colleges",
    desc: "Bridge Academia and Industry: Empower Students with Real-World Opportunities!",
    img: "https://img.freepik.com/free-photo/students-casual-outfits-holding-books_23-2147658327.jpg",
    bg: "bg-yellow-100",
  },
];

const UsersSection = () => {
  return (
    <div className="px-30 py-10 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Who's using CodeBridge?</h2>

      <div className="grid grid-cols-3 gap-6">
        {usersData.map((user, index) => (
          <div key={index} className="flex justify-between items-center border rounded-xl p-4 hover:shadow-lg transition">
            <div className="max-w-[60%]">
              <h3 className="font-semibold text-gray-800 mb-2">{user.title}</h3>
              <p className="text-sm text-gray-600">{user.desc}</p>
            </div>
            <div className={`w-24 h-24 rounded-full overflow-hidden flex justify-center items-center ${user.bg}`}>
              <img src={user.img} alt={user.title} className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersSection;
