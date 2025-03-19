import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-router-dom";
import logo from "../assets/Images/Logo.svg";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-transparent mt-6">
      {/* Centering content inside the container */}
      <div className="max-w-[1280px] mx-auto">
        <nav className="bg-stone-800 rounded-xl mb-8">
          <div className="flex justify-between items-center py-4 mx-4">
            {/* Left Side - Logo */}
            <div className="pl-1">
              <img src={logo} alt="logo" className="rounded-lg md:w-full md:h-12" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link to="/" className="text-white hover:text-gray-400">Our Platform</Link>
              <Link to="/pricing" className="text-white hover:text-gray-400">Pricing</Link>
              <Link to="#" className="text-white hover:text-gray-400">Why UNI5?</Link>
              <Link to="#" className="text-white hover:text-gray-400">Resources</Link>
              <Link to="#" className="text-white hover:text-gray-400">About Us</Link>

              {/* Dark Mode Toggle */}
              <button onClick={toggleTheme} className="text-white text-2xl px-2">
                {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
              </button>

              <button className="text-white bg-gradient-to-b from-stone-800 via-stone-700 to-stone-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2">
                Sign up
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="block md:hidden p-2 text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <ul className="flex flex-col items-center py-6 space-y-4">
                <button onClick={toggleTheme} className="text-white text-2xl px-2">
                  {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
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
      </div>
    </header>
  );
};

export default Header;
