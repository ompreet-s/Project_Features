import React from 'react';

const usersData = [
  {
    title: "Students and Professionals",
    desc: "Unlock Your Potential: Compete, Build Resume, Grow and get Hired!",
    img: "https://img.freepik.com/free-photo/happy-student-holding-files_23-2147658903.jpg",
    
  },
  {
    title: "Companies and Recruiters",
    desc: "Discover Right Talent: Hire, Engage, and Brand Like Never Before!",
    img: "https://img.freepik.com/free-photo/business-woman-posing_23-2148126085.jpg",
    
  },
  {
    title: "Colleges",
    desc: "Bridge Academia and Industry: Empower Students with Real-World Opportunities!",
    img: "https://img.freepik.com/free-photo/students-casual-outfits-holding-books_23-2147658327.jpg",
    
  },
];

const UsersSection = () => {
  return (
    <div className="px-30 py-10 bg-white max-sm:px-5 max-md:px-10 max-lg:px-10 max-xl:px-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Who's using CodeBridge?</h2>

      <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1 ">
        {usersData.map((user, index) => (
          <div key={index} className="flex justify-between items-center border rounded-xl p-4 hover:shadow-lg transition gap-4 max-sm:flex-col max-md:flex-col max-sm:p-3 max-md:p-5 max-md:justify-center max-md:text-center max-lg:flex-col max-lg:justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden flex justify-center items-center max-md:h-20 max-md:w-20">
              <img src={user.img} alt={user.title} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="max-w-[60%] max-sm:max-w-[100%] max-md:max-w-[100%] max-lg:max-w-[80%]">
              <h3 className="font-semibold text-gray-800 mb-2 max-md:text-lg ">{user.title}</h3>
              <p className="text-sm text-gray-600 max-lg:text-md">{user.desc}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersSection;
