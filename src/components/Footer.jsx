import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import lightLogo from "../assets/Images/Logo (2).png";
import darkLogo from "../assets/Images/Logo.svg";
import PlayStore from "../assets/Images/playstore.png";
import AppStore from "../assets/Images/appstore.png";
import Certification from "../assets/Images/certification.png";
import { BsGlobe2 } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <footer className="w-full max-w-[1280px] mx-auto text-white py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-6">
        {/* Left Section - Logo & Certification */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={isDarkMode ? darkLogo : lightLogo}
            alt="Logo"
            className="h-12 w-auto"
          />
          <img
            src={Certification}
            alt="Certification"
            className="h-12 bg-black p-2 rounded-2xl"
          />
        </div>

        {/* Right Section - App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <img src={AppStore} alt="Download on App Store" className="h-10 cursor-pointer" />
          <img src={PlayStore} alt="Get it on Google Play" className="h-10 cursor-pointer" />
        </div>
      </div>

      <div className="w-full border-t border-gray-700 my-6"></div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold">About UNI5</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Especially for you, we have prepared short stories of our users who agreed to share their opinions on our application.
            The main tests were carried out on performance and application stabilization.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-lg font-semibold">Product</h3>
          <ul className="mt-2 space-y-1 text-gray-400 text-sm">
            <li>Recruitment Software</li>
            <li>Attendance Management</li>
            <li>Performance Management</li>
            <li>Payroll Management</li>
            <li>Asset Management</li>
            <li>HR Software</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-2 space-y-1 text-gray-400 text-sm">
            <li>Blog</li>
            <li>HR Glossary</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-stone-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Subscribe to Newsletter</h3>
          <div className="mt-3">
            <label className="text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full p-2 mt-1 bg-stone-800 border border-gray-700 rounded-lg text-sm outline-none"
            />
          </div>
          <div className="mt-3">
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mt-1 bg-stone-800 border border-gray-700 rounded-lg text-sm outline-none"
            />
          </div>
          <button className="w-full bg-[#DB272D] hover:bg-red-600 text-white font-semibold p-2 mt-4 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm gap-4 text-center md:text-left">
        <p className="text-white flex items-center gap-1"><BsGlobe2 /> English (UK)</p>
        <p>© 2025 UNI5. All rights reserved. <span className="underline cursor-pointer">Privacy Policy</span></p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <FaFacebookF className="text-xl cursor-pointer hover:text-gray-200" />
          <FaLinkedinIn className="text-xl cursor-pointer hover:text-gray-200" />
          <FaTwitter className="text-xl cursor-pointer hover:text-gray-200" />
          <FaInstagram className="text-xl cursor-pointer hover:text-gray-200" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
