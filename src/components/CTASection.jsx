import React from "react";

const CTASection = () => {
  return (
    <section className="py-16 text-center bg-gray-100 rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">
        Start Your Free <span className="text-red-500">Trial Today</span>
      </h2>
      <p className="text-gray-600 mb-6">
        Streamline Payroll, Attendance & Performance <br/> Management-Start Your Free HRMS Trail Today!
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg">Try a Live Demo</button>
        <button className="bg-gray-800 text-white py-2 px-6 rounded-lg">Talk to Sales</button>
      </div>
    </section>
  );
};

export default CTASection;
