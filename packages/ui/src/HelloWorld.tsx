import React from "react";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

/**
 * A simple "Hello World" component with Tailwind styles.
 */
export const HelloWorld: React.FC = () => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "Unknown App"; // local env usage - but i have a package for this utils/env

  return (
    <div className="p-4 text-lg font-bold text-white bg-blue-500 rounded-lg">
      Hello World from {appName}
    </div>
  );
};
