"use client";

import React, { useState, useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode class on the HTML root element
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    const html = document.documentElement;
    if (!isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  // Set initial dark mode state on mount
  useEffect(() => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div
      onClick={toggleDarkMode}
      className={`cursor-pointer opacity-30 fixed top-0 right-0 m-1 p-1 z-[100] font-mono text-white h-10 w-10 rounded-full flex items-center justify-center ${
        isDarkMode ? "bg-gray-900" : "bg-gray-700"
      }`}
    >
      <div>{isDarkMode ? "🌙" : "☀️"}</div>
    </div>
  );
};

export default DarkModeToggle;
