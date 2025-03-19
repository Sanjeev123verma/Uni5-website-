import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const faqs = [
  {
    question: "Is There Any Cancellation Fee Or A Lock-In Period?",
    answer: "No, we do not charge any cancellation fees, and there are no long-term lock-in periods."
  },
  {
    question: "Which Kinds Of Costs Are Associated With Purchasing HR Software?",
    answer: "Costs depend on the features you choose. We offer flexible pricing plans to fit different business needs."
  },
  {
    question: "Who Owns My Data?",
    answer: "You own your data. We ensure security and provide full access to your information."
  },
  {
    question: "Do You Require Any Long-Term Commitments?",
    answer: "No, we offer flexible subscriptions without any long-term commitments."
  },
  {
    question: "Is There A Cost For Them To Get Trained On UNI5?",
    answer: "Training is included in our service, and there are no extra charges."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { isDarkMode } = useTheme();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`max-w-[1280px] mx-auto py-16 flex flex-col md:flex-row justify-between gap-12 px-2 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      {/* Heading */}
      <div className="md:w-1/2">
        <button className="px-4 py-2 bg-gradient-to-b from-stone-900 to-stone-800 border text-sm text-white rounded-lg mb-6">
          FAQs?
        </button>
        <h2 className="text-3xl md:text-5xl font-medium mb-6">
          Frequently Asked <span className="text-[#DB272D] mt-4 block">Questions</span>
        </h2>
        <p className="text-gray-400 max-w-xl">
          We provide answers to common questions about our products and services.
        </p>
      </div>

      {/* FAQ List */}
      <div className="md:w-1/2 space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-5 rounded-lg border transition-all duration-300 cursor-pointer ${
              isDarkMode
                ? "bg-stone-900 border-gray-700 text-white"
                : "bg-gray-100 border-gray-300 text-black"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-normal">{faq.question}</h3>
              <span className="text-xl font-bold transition-transform duration-200">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-[500px] mt-3 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
