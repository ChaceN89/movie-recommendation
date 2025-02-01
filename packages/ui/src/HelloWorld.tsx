import React from "react";
import dotenv from "dotenv";

// Load environment variables
import { getEnv, greet, capitalize } from "@movie-recommendation/utils";

/**
 * A simple "Hello World" component with Tailwind styles.
 */
export const HelloWorld: React.FC = () => {
  const appName= getEnv("NEXT_PUBLIC_APP_NAME", "Unknown App Name");

  return (
    <div className="p-4 text-lg font-bold text-white bg-blue-500 rounded-lg">
      Hello World from {appName}
    </div>
  );
};
