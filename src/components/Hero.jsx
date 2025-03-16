import React from 'react';
import Header from './Header';
import Features from './Features';
import Footer from './Footer';
import Partners from './Partners';
import Dashboard from './Dashboard';
import Testimonials from './Testimonials';
import MobileApp from './MobileApp';
import ContactSection from './ContactSection';
import FAQSection from './FAQSection';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const {isDarkMode} = useTheme()
    
    return (
  
    <div className= {`flex flex-col items-center ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-[#121212]'}`}>     
        <Header/>
        <Features/>
        <Partners/>
        <Dashboard/>
        <Testimonials/>
        <MobileApp/>
        <ContactSection/>
        <FAQSection/>
        <Footer/>
        
        </div>
    );
};

export default Hero;

