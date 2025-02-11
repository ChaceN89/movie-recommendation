/**
 * @file DarkModeToggle.tsx
 * @author Chace Nielson
 * @created Jan 14, 2025
 * @updated Feb 2, 2025
 * @description A simple toggle for enabling and disabling dark mode by adding/removing the `dark` class on the `<html>` element.
 * 
 * @note Ensure `darkMode: "class"` is set in `tailwind.config.js` for dark mode styles to work.
 * 
 * @example
 * import DarkModeToggle from "@movie-recommendation/ui/devTools/DarkModeToggle";
 * 
 * function App() {
 *   return <DarkModeToggle />;
 * }
 */

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
      className={`cursor-pointer opacity-30 fixed top-0 right-0 m-1 p-1.5 z-[150] font-mono text-white h-10 w-10 rounded-full flex items-center justify-center bg-white`}
    >
      <div className="rounded-full bg-black p-0.5">{isDarkMode ? "🌙" : "☀️"}</div>
    </div>
  );
};

export default DarkModeToggle;
