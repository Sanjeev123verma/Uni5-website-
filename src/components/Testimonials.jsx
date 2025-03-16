import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import your logos from the assets folder
import logo1 from "../assets/Images/Simpolo 06.png";
import logo2 from "../assets/Images/AD Factor Logo 07.png";
import logo3 from "../assets/Images/Prakriti 01.png";
import logo4 from "../assets/Images/Viva Group icon.png";

const testimonials = [
  {
    id: 1,
    logo: logo1,
    feedback:
      "We have been using UNI5 HRMS for over a year and are happy with our choice. Excellent service support.",
    name: "Swapnali Deshpandey",
    position: "VP & Head HR - Simpolo",
  },
  {
    id: 2,
    logo: logo2,
    feedback:
      "We have been using UNI5 HRMS for over a year and are happy with our choice. Excellent service support.",
    name: "Nikita Patil",
    position: "Senior HR - Adfactors",
  },
  {
    id: 3,
    logo: logo3,
    feedback:
      "Uni5 HRMS has streamlined our payroll and attendance tracking effortlessly. A must-have HR solution!",
    name: "Ajinkya Ranpise",
    position: "Senior HR - Prakriti",
  },
  {
    id: 4,
    logo: logo4,
    feedback:
      "Managing employees has never been this simple! Uni5 HRMS automates payroll, attendance, and tracking effortlessly.",
    name: "Ramesh Vaidya",
    position: "Head HR - Viva Groups",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full sm:w-11/12 md:w-9/10 lg:w-4/5 xl:w-4/5 max-w-[1280px] mx-auto px-2 sm:px-2 lg:px-2 text-white py-8">
      <div className="text-center mb-12">
        <button className="px-4 py-2 bg-gradient-to-b from-stone-900 to-stone-800 border text-sm rounded-lg">
          Client Testimonials
        </button>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Gain Valuable Insights <br />
          <span className="text-[#DB272D]">From HR Leaders Just Like You</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Gain valuable insights from HR leaders like YOU. Learn from their
          experiences. Discover best practices, and drive success within your
          organization.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap justify-center md:justify-between gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-stone-900 p-4 w-64 h-74 rounded-md border border-gray-700 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-red-500"
          >
            <button className="flex mb-6 bg-stone-700 px-2 rounded-md">
              <img
                src={testimonial.logo}
                alt="Company Logo"
                className="w-18 h-12 object-contain"
              />
            </button>
            <p className="text-gray-300 mb-10">"{testimonial.feedback}"</p>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-10 h-10 bg-stone-700 rounded-full"></div>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-8">
        <div className="hidden md:flex gap-4">
          <button className="p-3 bg-gradient-to-b from-stone-900 to-stone-800 rounded-full transition">
            <FaArrowLeft className="text-white" />
          </button>
          <button className="p-3 bg-gradient-to-b from-stone-900 to-stone-800 rounded-full transition">
            <FaArrowRight className="text-white" />
          </button>
        </div>

        <button className="bg-[#DB272D] hover:bg-red-500 px-6 py-3 rounded-lg text-white font-semibold">
          See all Customer Stories
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
