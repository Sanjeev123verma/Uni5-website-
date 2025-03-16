import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const ContactSection = () => {
   const { isDarkMode } = useTheme();

  return (
    <div className={`w-full sm:w-11/12 md:w-9/10 lg:w-4/5 xl:w-4/5 max-w-[1280px] mx-auto px-4 sm:px-4 lg:px-2 py-12 ${
      isDarkMode ? "text-white" : "text-black"
    }`}>
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        {/* Left: Contact Form */}
        <div className="w-full lg:w-1/2 bg-stone-900 p-6 rounded-lg border border-gray-700 text-white">
          <h3 className="text-lg font-semibold mb-4">Quick Connect Form</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Company Name"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Contact Email"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none h-28"
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="bg-[#DB272D]" />
              <p className="text-sm text-gray-400">
                I hereby read the website policy -{" "}
                <span className="text-[#DB272D] cursor-pointer">
                  Terms & Conditions
                </span>
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#DB272D] text-white p-3 rounded-md text-lg font-semibold">
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
          <h3 className="text-xl mt-4">
            Do you have any questions for us? We would love to hear from you and
            are happy to answer all your inquiries.
          </h3>

          {/* Contact Details */}
          <div className="mt-6 space-y-4">
            <div className="flex gap-3 items-center">
              <span className="text-[#DB272D] text-3xl">
                <SlLocationPin />
              </span>
              <p className="text-lg text-gray-400">
                314/315, Kingstone Court Commercial, Opp Ganpati Mandir, Near
                Old Viva College, Virar, Maharashtra 401303
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#DB272D] text-3xl">
                <IoCallOutline />
              </span>
              <p className="text-gray-400 text-lg">
                Support: 080809 31302 <br />
                Office: 080809 31302
              </p>
            </div>
            <div className="flex items-center gap-3">
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
