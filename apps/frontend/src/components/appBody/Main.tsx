/**
 * @file Main.tsx
 * @description The main content area of the application.
 */
import React from "react";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="flex-grow flex flex-col bg-primary-dark dark:bg-primary-darker">
    {children}
  </main>;
};

export default Main;