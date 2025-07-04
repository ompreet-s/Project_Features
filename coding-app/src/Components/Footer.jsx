import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#1d1f2f] text-white pt-14 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex  justify-between gap-10 pb-14 border-b border-gray-700 max-md:gap-20 max-sm:flex-col max-sm:gap-7">
        
          <div className="w-[300px] max-md:w-[500px] max-sm:w-[250px]">
          <div className="flex items-center  font-bold text-xl">
        <span className="bg-white text-black px-2 py-1 rounded">C</span>
        <span className="text-white">CodeBridge</span>
      </div>
          <p className="text-md text-gray-300 mt-5">
            Streamline your journey into tech with challenges, learning paths,
            and industry-level assessments—all from one platform.
          </p>
        </div>

        
         
            <div className="grid grid-cols-5 gap-10 max-md:flex max-md:flex-wrap ">
              
              <div>
                <h4 className="font-semibold mb-5 text-white"><a href="#">Products</a></h4>
                <ul className="text-md text-gray-300 flex flex-col gap-3  max-lg:text-sm">
                  <li><a href="#">Assessments</a></li>
                  <li><a href="#">FaceCode</a></li>
                  <li><a href="#">Hackathons</a></li>
                </ul>
              </div>

              
              <div>
                <h4 className="font-semibold mb-5 text-white"><a href="#">Features</a></h4>
                <ul className="text-md text-gray-300 flex flex-col gap-3 max-lg:text-sm">
                  <li><a href="#">Proctoring</a></li>
                  <li><a href="#">Analytics</a></li>
                  <li><a href="#">Reports</a></li>
                </ul>
              </div>

             
              <div>
                <h4 className="font-semibold mb-5 text-white"><a href="#">Solutions</a></h4>
                <ul className="text-md text-gray-300 flex flex-col gap-3  max-lg:text-sm">
                  <li><a href="#">Students</a></li>
                  <li><a href="#">Recruiters</a></li>
                  <li><a href="#">Colleges</a></li>
                </ul>
              </div>

              
              <div>
                <h4 className="font-semibold mb-5 text-white"><a href="#">Resources</a></h4>
                <ul className="text-md text-gray-300 flex flex-col gap-3  max-lg:text-sm">
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">Guides</a></li>
                  <li><a href="#">Webinars</a></li>
                </ul>
              </div>

              
              <div>
                <h4 className="font-semibold mb-5 text-white"><a href="">Company</a></h4>
                <ul className="text-md text-gray-300 flex flex-col gap-3  max-lg:text-sm">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        

        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-8">
          
          <div className="text-md text-gray-300">
            <p className="font-semibold text-white mb-1 text-lg">Address</p>
            <p>CodeBridge HQ</p>
            <p>Bhubaneshwar,Odisha, India</p>
            <div className="flex items-center gap-3 mt-8 text-gray-700 ">
              <MdEmail className="text-lg text-blue-600 max-sm:text-5xl" />
              <a href="mailto:support@codebridge.com" className="hover:underline hover:text-blue-700 text-white font-medium text-lg max-sm:text-sm">
                Email us at support@codebridge.com for any queries
                </a>
            </div>
          </div>

         
          <div className="flex gap-7">
            <a href="https://www.instagram.com/" target="_blank" className="text-gray-300 hover:text-white text-3xl"><FaInstagram /></a>
            <a href="https://www.linkedin.com/" target="_blank" className="text-gray-300 hover:text-white text-3xl"><FaLinkedin /></a>
            <a href="https://x.com/" target="_blank" className="text-gray-300 hover:text-white text-3xl"><FaXTwitter /></a>
          </div>
        </div>

        
        <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4 pb-4">
        &copy; {new Date().getFullYear()} <span className="text-white font-semibold">CodeBridge</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
