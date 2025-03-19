import React from "react";

const AddOns = () => {
  const addOns = [
    { title: "Attendance Management", price: "Starting at $10/month after 60-day trial." },
    { title: "Loan & Advances", price: "Starting at $0.18 per hour of compute and $0.07 perGB of storage." },
    { title: "Asset Management", price: "$5/month for 50GB bandwidth and 50GB for storage." },
    { title: "LMS Management", price: "$49/month per active committer" },
  ];

  return (
    <section className="py-16">
      <p className="text-2xl text-red-500 text-center mb-4">See features includes</p>
      <h2 className="text-3xl font-semibold text-center mb-8">Additional Add-Ons</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {addOns.map((addOn, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2">{addOn.title}</h3>
            <p className="text-gray-600 mb-4">{addOn.price}</p>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddOns;
