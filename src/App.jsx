import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import HomePage from "./Pages/HomePage";
import PricingPage from "./Pages/PricingPages";

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full overflow-x-hidden ${
        isDarkMode ? "bg-[#121212] text-white" : "bg-white text-[#121212]"
      }`}
    >

      <div className="w-full sm:w-11/12 md:w-9/10 lg:w-4/5 xl:w-4/5 max-w-[1280px] mx-auto px-2 sm:px-2 lg:px-0">
        <Router>
        <Header />
      <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/pricing" element = {<PricingPage/>}/>
      
      </Routes>
        <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;

 {/* <Route path="/uni5" element={} />
       <Route path="/pricing" element={} />
       <Route path="/resources" element={} />
       <Route path="/about" element={} /> */}