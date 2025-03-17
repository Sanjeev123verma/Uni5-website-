import React from "react";
import partner1 from "../assets/Images/Terado Eng 02.png"; // Example logo
import partner2 from "../assets/Images/vivagroup.png";
import partner3 from "../assets/Images/Simpolo 06.png";
import partner4 from "../assets/Images/Rustomjee Logo 04.png";
import partner5 from "../assets/Images/PT Logo 03.png";
import partner6 from "../assets/Images/Prakriti 01.png";
import { useTheme } from "../context/ThemeContext";

const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

const Partners = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="max-w-[1280px] mx-auto py-8">
      <p className="text-center text-lg font-semibold mb-6">
        Partnering with top industry experts
      </p>
      <div className="w-full overflow-hidden py-4">
        <div className="flex w-max animate-scroll">
          {partners.concat(partners).map((logo, index) => (
            <div
              key={index}
              className={`${!isDarkMode ? "bg-black p-2" : ""} flex items-center`}
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="w-28 h-10 mx-8"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
