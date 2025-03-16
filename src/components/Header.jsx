import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/Images/Logo.svg";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  // const [theme, setTheme] = useState();
  const { isDarkMode, toggleTheme } = useTheme();
  console.log("Header Component Rendered. Dark Mode:", isDarkMode);
    

  // const toggleTheme = () => {
  //   setTheme(!theme);
  // }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full sm:w-11/12 md:w-9/10 lg:w-4/5 xl:w-4/5 max-w-[1280px] mx-auto px-1 sm:px-4 lg:px-4 mt-10">
      <nav className="bg-stone-800 rounded-xl mb-8">
        <div className="flex justify-between items-center py-4">
          {/* Left Side - Logo */}
          <div className="pl-1">
            <img src={logo} alt="logo" className="rounded-lg md:w-full md:h-12" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-white hover:text-gray-400">Our Platform</a>
            <a href="#" className="text-white hover:text-gray-400">Pricing</a>
            <a href="#" className="text-white hover:text-gray-400">Why UNI5?</a>
            <a href="#" className="text-white hover:text-gray-400">Resources</a>
            <a href="#" className="text-white hover:text-gray-400">About Us</a>
            <button onClick={toggleTheme} className="text-white text-3xl px-1">
            {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode /> }
            </button>

            <button className="text-white bg-gradient-to-b from-stone-800 via-stone-700 to-stone-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 mr-2 py-2.5">
              Sign up
            </button>
          </div>


          <button onClick={toggleMenu} className="block md:hidden p-2 text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center py-6 space-y-4">
            <button onClick={toggleTheme} className="text-white text-3xl px-1">
            {isDarkMode ?  <MdOutlineLightMode /> : <MdDarkMode />}
            </button>
              <li><a href="#" className="text-white hover:text-gray-400">Our Platform</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Pricing</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Why UNI5?</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Resources</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">About Us</a></li>
              <button className="bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600">
                Sign up
              </button>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
