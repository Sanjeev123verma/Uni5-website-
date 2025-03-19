import React from "react";
import { useTheme } from "../context/ThemeContext";

// Import your partner images
import partner1 from "../assets/Images/Terado Eng 02.png";
import partner2 from "../assets/Images/vivagroup.png";
import partner3 from "../assets/Images/Simpolo 06.png";
import partner4 from "../assets/Images/Rustomjee Logo 04.png";
import partner5 from "../assets/Images/PT Logo 03.png";
import partner6 from "../assets/Images/Prakriti 01.png";

const PricingPartners = () => {
  const { isDarkMode } = useTheme();
  
  // Keep your existing partner array
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

  return (
    <section
      className={`py-16 text-center ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-3xl font-semibold mb-8">Partnering With Top Industry Experts</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">
        {partners.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            className="w-28 h-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default PricingPartners;
