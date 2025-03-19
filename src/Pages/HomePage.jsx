import React from "react";
import Features from "../components/Features";
import Partners from "../components/Partners";
import Dashboard from "../components/Dashboard";
import Testimonials from "../components/Testimonials";
import MobileApp from "../components/MobileApp";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import { useTheme } from "../context/ThemeContext";

const HomePage = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#121212] text-white" : "bg-white text-[#121212]"
      }`}
    >
      <div>
        <Features />
        <Partners />
        <Dashboard />
        <Testimonials />
        <MobileApp />
        <ContactSection />
        <FAQSection />
      </div>
    </div>
  );
};

export default HomePage;
