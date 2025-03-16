import { createContext, useContext, useState, useEffect } from 'react';

// Define the default context value
const defaultContextValue = {
  isDarkMode: false,
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultContextValue);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {

    const storedTheme = localStorage.getItem('isDarkMode');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  console.log("useTheme context:", context); // ✅ Check if context is undefined or null
  if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};




// import { createContext, useContext } from "react";

// export const ThemeContext = createContext({
//   darkMode: true,
//   toggleDarkMode: () => {}
// })
// export const ThemeProvider = ThemeContext.Provider;

// export function useTheme() {
//   return useContext(ThemeContext);
// }

// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//     const [darkMode, setDarkMode] = useState(false);

//     const toggleDarkMode = () => {
//       setDarkMode((prevMode) => !prevMode);
//     };

//     return (
//         <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export const useTheme = () => {
//   return useContext(ThemeContext);
// };
