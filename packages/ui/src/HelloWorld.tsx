/**
 * @file HelloWorld.tsx
 * @author Chace Nielson
 * @created Jan 14, 2025
 * @updated Feb 2, 2025
 * @description A simple "Hello World" component that displays the application name from environment variables.
 * 
 * @example
 * import { HelloWorld } from "@movie-recommendation/ui";
 * 
 * function App() {
 *   return <HelloWorld />;
 * }
 */

import React from "react";

// Load environment variables
import { getEnv } from "@movie-recommendation/utils";

/**
 * A simple "Hello World" component with Tailwind styles.
 */
export const HelloWorld: React.FC = () => {
  const appName = getEnv("NEXT_PUBLIC_APP_NAME", "Unknown App Name");

  return (
    <div className="p-4 text-lg font-bold text-white bg-blue-500 rounded-lg">
      Hello World from {appName}
    </div>
  );
};
