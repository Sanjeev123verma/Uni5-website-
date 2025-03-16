import React from "react";
import mobileImage from "../assets/Images/Phone Image.png"; // Ensure the correct path to your image

const MobileApp = () => {
  return (
    <div className="w-full sm:w-11/12 md:w-9/10 lg:w-4/5 xl:w-4/5 max-w-[1280px] mx-auto px-2 sm:px- lg:px-2 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left: Mobile Image */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <img src={mobileImage} alt="Mobile App" className="w-[250px] lg:w-[300px]" />
      </div>

      {/* Right: Text Content */}
      <div className="w-full lg:w-2/3">
        <button className="px-4 py-2 bg-gradient-to-b from-stone-900 to-stone-800 border text-sm rounded-lg text-white">
          Mobile App
        </button>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          UNI5 Application Trusted <br />
          By Employees <span className="text-[#DB272D]">Globally</span>
        </h2>
        <p className="text-gray-400 mt-4">
          We provide answers to common questions about our products/services.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="text-lg font-semibold">Easy Check-In & Check-Out</h4>
            <p className="text-gray-500 text-sm">
              Seamless and efficient check-in/check-out system.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Payslips & Reimbursements</h4>
            <p className="text-gray-500 text-sm">
              Access salary details and process reimbursements effortlessly.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Single Click Approvals</h4>
            <p className="text-gray-500 text-sm">
              Approve leaves, expenses, and requests with one click.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Attendance & Leaves</h4>
            <p className="text-gray-500 text-sm">
              Manage work hours, track attendance, and apply for leaves.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Employee Recognition & Engagement</h4>
            <p className="text-gray-500 text-sm">
              Celebrate milestones with automated reminders.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Attendance Regularization</h4>
            <p className="text-gray-400 text-sm">
              Resolve attendance discrepancies with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
