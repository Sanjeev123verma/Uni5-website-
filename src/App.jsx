import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import Dashboard from "./components/Dashboard";
import Testimonials from "./components/Testimonials";
import MobileApp from "./components/MobileApp";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full overflow-x-hidden ${
        isDarkMode ? "bg-[#121212] text-white" : "bg-white text-[#121212]"
      }`}
    >

      <div className="w-full sm:w-11/12 md:w-9/10 lg:w-4/5 xl:w-4/5 max-w-[1280px] mx-auto px-2 sm:px-2 lg:px-0">

        <Header />
        <Features />
        <Partners />
        <Dashboard />
        <Testimonials />
        <MobileApp />
        <ContactSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
