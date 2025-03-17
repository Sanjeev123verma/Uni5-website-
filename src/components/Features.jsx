import React from "react";
import darkImage from "../assets/Images/Banner Img 2.png"; // Adjust the path to your image
import lightImage from "../assets/Images/Banner Img.png";
import { useTheme } from "../context/ThemeContext";

const Features = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between py-12 md:gap-0 gap-4">
      {/* Left Side - Text Content */}
      <div className="w-full md:w-3/5">
        <button className="rounded-xl p-4 bg-gradient-to-b from-stone-900 to-stone-800 border text-white mb-4">
          Empowering Workforces, Simplifying HR!
        </button>
        <h1 className="text-5xl font-bold font-lexend my-4">
          The HR Platform <br />
          <span className="text-[#DB272D]">For Growing Organizations</span>
        </h1>
        <p className={`my-8 text-xl font-lexend ${isDarkMode ? "text-gray-50" : "text-black"}`}>
          Your one-stop solution for Recruitment, Performance, Payroll, and Employee Utilities.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:my-12">
          <button className="border border-gray-500 px-6 py-2 rounded-lg flex items-center justify-between w-full md:w-64">
            No of Employees
            <span className="ml-2">▼</span>
          </button>

          <button className="border border-gray-500 px-6 py-2 rounded-lg flex items-center justify-between w-full md:w-64">
            What are you interested?
            <span className="ml-2">▼</span>
          </button>

          <button className="bg-[#DB272D] text-white px-6 py-2 rounded-lg flex items-center text-center justify-between w-28">
            Let's Go
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-2/5 flex justify-center">
        <img
          src={isDarkMode ? darkImage : lightImage}
          alt="HR Platform"
          className="rounded-lg w-full max-w-lg"
        />
      </div>
    </div>
  );
};

export default Features;
