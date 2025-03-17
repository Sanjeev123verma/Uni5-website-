import React from "react";
import mobileImage from "../assets/Images/Phone Image.png"; // Ensure the correct path to your image

const MobileApp = () => {
  return (
    <div className="max-w-[1280px] mx-auto py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left: Mobile Image */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <img src={mobileImage} alt="Mobile App" className="w-[250px] lg:w-[320px] object-contain" />
      </div>

      {/* Right: Text Content */}
      <div className="w-full lg:w-2/3">
        <button className="px-4 py-2 bg-gradient-to-b from-stone-900 to-stone-800 border text-sm rounded-lg text-white">
          Mobile App
        </button>
        <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
          UNI5 Application Trusted <br />
          By Employees <span className="text-[#DB272D]">Globally</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl">
          We provide answers to common questions about our products and services.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {[
            { title: "Easy Check-In & Check-Out", desc: "Seamless and efficient check-in/check-out system." },
            { title: "Payslips & Reimbursements", desc: "Access salary details and process reimbursements effortlessly." },
            { title: "Single Click Approvals", desc: "Approve leaves, expenses, and requests with one click." },
            { title: "Attendance & Leaves", desc: "Manage work hours, track attendance, and apply for leaves." },
            { title: "Employee Recognition & Engagement", desc: "Celebrate milestones with automated reminders." },
            { title: "Attendance Regularization", desc: "Resolve attendance discrepancies with ease." },
          ].map((feature, index) => (
            <div key={index} className="bg-stone-900 p-4 rounded-lg border border-gray-700 shadow-md transition hover:-translate-y-1 hover:border-red-500">
              <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
              <p className="text-gray-400 text-sm mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
