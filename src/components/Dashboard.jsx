import React from "react";
import dashboardImage from "../assets/Images/Dashboard Image.png"; // Your image path

const FeatureCard = ({ title, description }) => (
  <div className="bg-stone-800 p-4 rounded-xl shadow-md border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-x-1">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="max-w-[1280px] mx-auto text-white py-16 flex flex-col items-center">
      {/* Heading Section */}
      <button className="mb-4 px-4 py-2 border bg-gradient-to-b from-stone-900 to-stone-800 rounded-lg">
        Why UNI5?
      </button>
      <h1 className="text-4xl font-bold text-center">
        Work Smarter And <span className="text-[#DB272D]">Stay Ahead With UNI5</span>
      </h1>
      <p className="text-gray-400 text-center mt-4 max-w-2xl">
        UNI5 HR empowers your teams to work more efficiently in an ever-evolving world.
        By automating repetitive tasks, you can focus on strategic goals and create
        an employee experience that drives success.
      </p>

      {/* Main Content Container */}
      <div className="w-full mt-12 bg-stone-900 rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row gap-6">
        {/* Left Side: Feature Cards */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <FeatureCard
            title="Attendance & Time"
            description="Efficiently track work hours, shifts, and overtime with a streamlined system that ensures compliance and enhances productivity."
          />
          <FeatureCard
            title="Seamless Employee Lifecycle"
            description="Manage the entire employee lifecycle, from hiring to retirement, with an integrated and hassle-free process."
          />
          <FeatureCard
            title="Payroll & Finance Management"
            description="Automate salary processing, tax calculations, and expense reimbursements for accurate and easy financial management."
          />
          <FeatureCard
            title="Realtime Reports & Analytics"
            description="Gain instant, data-driven insights to monitor workforce trends, assess performance, and make informed decisions with ease."
          />
          <FeatureCard
            title="Real-Time Workforce Insights"
            description="Monitor employee locations in real-time to enhance workforce management, improve security, and boost efficiency."
          />
        </div>

        {/* Right Side: Dashboard Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={dashboardImage}
            alt="Dashboard"
            className="md:h-[400px] rounded-2xl p-2 bg-stone-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
