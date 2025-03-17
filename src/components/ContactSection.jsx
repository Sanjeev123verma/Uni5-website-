import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const ContactSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`max-w-[1280px] mx-auto py-16 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Left: Contact Form */}
        <div className="w-full lg:w-1/2 bg-stone-900 p-6 rounded-lg border border-gray-700 shadow-md">
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Connect Form
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Company Name"
              className="w-full p-3 rounded-md bg-stone-800 text-white border border-gray-600 focus:border-red-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Contact Email"
              className="w-full p-3 rounded-md bg-stone-800 text-white border border-gray-600 focus:border-red-500 outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-md bg-stone-800 text-white border border-gray-600 focus:border-red-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-stone-800 text-white border border-gray-600 focus:border-red-500 outline-none h-28"
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-500" />
              <p className="text-sm text-gray-400">
                I hereby read the website policy -{" "}
                <span className="text-[#DB272D] cursor-pointer hover:underline">
                  Terms & Conditions
                </span>
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#DB272D] hover:bg-red-500 text-white p-3 rounded-md text-lg font-semibold transition">
              Submit
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full lg:w-1/2">
          <button className="px-4 py-2 bg-gradient-to-b from-stone-900 to-stone-800 border text-white text-sm rounded-lg mb-4">
            Connect With Us
          </button>
          <h2 className="text-3xl md:text-5xl font-bold">
            Get In <span className="text-[#DB272D]">Touch</span>
          </h2>
          <p className="text-lg mt-4 text-gray-400 max-w-2xl">
            Have questions? We would love to hear from you and answer all your
            inquiries.
          </p>

          {/* Contact Details */}
          <div className="mt-6 space-y-6">
            <div className="flex gap-4 items-center">
              <span className="text-[#DB272D] text-3xl">
                <SlLocationPin />
              </span>
              <p className="text-gray-400 text-lg">
                314/315, Kingstone Court, Near Old Viva College, Virar, Maharashtra 401303
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-[#DB272D] text-3xl">
                <IoCallOutline />
              </span>
              <p className="text-gray-400 text-lg">
                Support: 080809 31302 <br />
                Office: 080809 31302
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-[#DB272D] text-3xl">
                <MdOutlineForwardToInbox />
              </span>
              <p className="text-gray-400 text-lg">
                office@uni5tech.com <br />
                support@uni5.tech.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
