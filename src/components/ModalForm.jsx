import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";

const ModalForm = ({ onClose }) => {
  const { isDarkMode } = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post("https://67aea79f9e85da2f020df8f4.mockapi.io/users", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm bg-opacity-50 z-50">
      <div
        className={`p-6 rounded-lg shadow-lg w-96 relative transition-colors duration-300 ${
          isDarkMode ? "bg-white text-black" : "bg-white text-black"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-3 text-xl hover:text-red-500"
        >
          ✖
        </button>

        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4"> ✔ SUCCESS!  </h2>
            <h4 className="font-medium">Thank you for submitting the form.</h4>
            <p className="mb-4">Our team will review your request and get back to you soon.</p>
            <button className="bg-[#DB272D] text-white px-4 py-2 rounded" onClick={onClose}>
              Continue
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h1 className="text-2xl font-semibold text-center">Let's Connect & Collaborate</h1>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium">Company Name*</label>
              <input
                type="text"
                {...register("companyName", { required: "Company Name is required" })}
                className="w-full bg-gray-100 text-black border px-3 py-2 rounded-md"
                placeholder="Enter company name"
              />
              {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email*</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full bg-gray-100 text-black border px-3 py-2 rounded-md"
                placeholder="Enter email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Contact Number with Validation */}
            <div>
              <label className="block text-sm font-medium">Contact Number*</label>
              <input
                type="text"
                {...register("contact", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Contact number must start with 6-9 and be 10 digits",
                  },
                })}
                className="w-full bg-gray-100 text-black border px-3 py-2 rounded-md"
                placeholder="Enter contact number"
              />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium">Your Message*</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full bg-gray-100 text-black border px-3 py-2 rounded-md"
                rows="3"
                placeholder="Enter your message"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            {/* Checkbox with Spacing */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                {...register("terms", { required: "You must agree before submitting" })}
                className="mt-1"
              />
              <label className="text-sm">
                By proceeding, I confirm that I am authorized to provide this content on behalf of my company.
              </label>
            </div>
            {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full bg-[#DB272D] text-white py-2 rounded-md ${
                isSubmitting ? "bg-red-400 cursor-not-allowed" : "bg-[#DB272D]"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ModalForm;
