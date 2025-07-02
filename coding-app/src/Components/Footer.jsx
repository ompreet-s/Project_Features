import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1d1f2f] text-white pt-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex  justify-between gap-10 pb-14 border-b border-gray-700">
          {/* Branding */}
          <div className="w-[300px]">
          <div className="flex items-center space-x-2 font-bold text-xl">
        <span className="bg-white text-black px-2 py-1 rounded">C</span>
        <span className="text-white">CodeBridge</span>
      </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Streamline your journey into tech with challenges, learning paths,
            and industry-level assessments—all from one platform.
          </p>
        </div>

          {/* Quick Links */}
         
            <div className="grid grid-cols-5 gap-10">
              {/* Products */}
              <div>
                <h4 className="font-semibold mb-2 text-white">Products</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li><a href="#">Assessments</a></li>
                  <li><a href="#">FaceCode</a></li>
                  <li><a href="#">Hackathons</a></li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold mb-2 text-white">Features</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li><a href="#">Proctoring</a></li>
                  <li><a href="#">Analytics</a></li>
                  <li><a href="#">Reports</a></li>
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="font-semibold mb-2 text-white">Solutions</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li><a href="#">Students</a></li>
                  <li><a href="#">Recruiters</a></li>
                  <li><a href="#">Colleges</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold mb-2 text-white">Resources</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">Guides</a></li>
                  <li><a href="#">Webinars</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold mb-2 text-white">Company</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-8">
          {/* Address */}
          <div className="text-sm text-gray-300">
            <p className="font-semibold text-white mb-1">Address</p>
            <p>CodeBridge HQ</p>
            <p>New Delhi, India</p>
            <p>Email: support@codebridge.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white text-lg"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-white text-lg"><FaLinkedin /></a>
            <a href="#" className="text-gray-300 hover:text-white text-lg"><FaTwitter /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4 pb-4">
          © 2025 <span className="text-white font-semibold">CodeBridge</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
