import React, { useState, useEffect } from "react";
import { BiSolidMoon, BiSun } from "react-icons/bi";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-4 py-2  rounded-full ${
        darkMode ? "bg-white" : "bg-gray-800"
      } ${
        darkMode ? "text-gray-900" : "text-white"
      } transition-colors duration-200`}
    >
      {darkMode ? <BiSolidMoon /> : <BiSun />}
    </button>
  );
};

export default ThemeSwitcher;
