// import React from "react";

// const PricingPlans = () => {
//   const plans = [
//     {
//       title: "Essential HR",
//       paragraph: "Per User, Per Month, Billed Annually",
//       features: [
//         "Employee Onboarding",
//         "Employee Database Management",
//         "HR Files Management",
//         "Employee Self-Service",
//         "Time Off Management",
//       ],
//     },
//     {
//       title: "Premium",
//       paragraph: "Per User, Per Month, Billed Annually",
//       features: [
//         "Performance Management",
//         "Goals Tracking",
//         "Advanced HR Analytics",
//         "Employee Engagement",
//         "Compensation Management",
//       ],
//       popular: true,
//     },
//     {
//       title: "Enterprise",
//       paragraph: "Per User, Per Month, Billed Annually",
//       features: [
//         "UNI5 Recruit",
//         "UNI5 Payroll",
//         "UNI5 Performance",
//         "UNI5 Utility",
//       ],
//     },
//   ];

//   return (
//     <section className="py-16">
//       {/* Section Heading */}
//       <div className="text-center mb-8">
//         <button className="rounded-lg p-2 px-6 bg-gradient-to-b from-gray-50 to-gray-400 shadow-xl text-black mb-4">
//           Pricing
//         </button>
//         <h2 className="text-4xl font-semibold mb-2">Flexible Pricing Plans</h2>
//         <p className="text-gray-500">
//           Choose the plan that best fits your needs.
//         </p>
//       </div>

//       {/* Pricing Cards */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {plans.map((plan, index) => (
//           <div key={index} className="rounded-lg p-6 shadow-lg relative hover:translate-y-1 delay-200">
//             {/* "Most Popular" Label */}
//             {plan.popular && (
//               <div className="bg-red-500 text-white inline-block px-2 py-1 rounded text-sm mb-2 absolute top-6 right-6">
//                 Most Popular
//               </div>
//             )}

//             {/* Plan Title */}
//             <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
//             {/* Plan Subtext */}
//             <p className="text-sm text-gray-500 mb-4">{plan.paragraph}</p>

//             <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full">
//               Sign Up
//             </button>
            

//             {/* Features List */}
//             <ul className="m-6">
               
//               {plan.features.map((feature, idx) => (
              
//                 <li key={idx} className="flex items-center mb-1">
//                   ✅ {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;



import React from 'react';
import { useTheme } from '../context/ThemeContext';


const PricingCard = ({ title, isPopular, features }) => { 

     const { isDarkMode } = useTheme();
     

  return (

     <div
     className={`${
       isDarkMode ? "bg-[#121212] text-white" : "bg-white text-[#121212]"
     }`}
   >
     <div
        className={`${
          isDarkMode ? "bg-stone-800 text-white" : "bg-stone-100 text-[#121212]" 
        } shadow-lg rounded-lg p-6 flex flex-col h-full`}
      >
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          {isPopular && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              Most Popular
            </span>
          )}
        </div>
        <p className="text-sm">Per User, Per Month, Billed Annually.</p>
      </div>

      <button className="bg-red-500 hover:bg-red-600 hover:scale-94 active:scale-95 transitio-all duration-200 transform text-white py-3 rounded w-full mb-6">
        Sign Up
      </button>

      <div className="border-t border-gray-400 ">
        <h3 className="font-bold mb-4">Features:</h3>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="bg-red-500 text-white p-1 rounded-full mr-2 flex items-center justify-center w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

const PricingPlans = () => {
  // Sample data
  const pricingData = [
    {
      title: "Essential HR",
      isPopular: false,
      features: [
        "Employee Onboarding",
        "Employee Database Management",
        "HR Files Management",
        "Employee Self-Service",
        "Time Off Management",
        "Workflow Management",
        "HR Process"
      ]
    },
    {
      title: "Premium",
      isPopular: true,
      features: [
        "Performance Management",
        "Goals Tracking",
        "Advanced HR Analytics",
        "Employee Engagement",
        "Compensation Management"
      ]
    },
    {
      title: "Enterprise",
      isPopular: false,
      features: [
        "UNI5 Recruit",
        "UNI5 Payroll",
        "UNI5 Performance",
        "UNI5 Utility"
      ]
    }
  ];

  return (
     
     <div className="min-h-screen p-4">
       <div className="mx-auto pb-4">
         <div className="text-center mb-8">
           <button className="rounded-lg p-2 px-6 bg-gradient-to-b from-stone-50 to-stone-300 shadow-xl text-black mb-4">
             Pricing
           </button>
           <h2 className="text-4xl font-semibold mb-2">Flexible Pricing Plans</h2>
           <p className="text-gray-500">
             Choose the plan that best fits your needs.
           </p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {pricingData.map((plan, index) => (
             <PricingCard
               key={index}
               title={plan.title}
               isPopular={plan.isPopular}
               features={plan.features}
             />
           ))}
         </div>
       </div>
     </div>
   );
};

export default PricingPlans;


// bg-gradient-to-br from-pink-50 to-indigo-50