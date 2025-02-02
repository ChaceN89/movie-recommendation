/**
 * @file GreetComponent.tsx
 * @author Chace Nielson
 * @created Jan 14, 2025
 * @updated Feb 2, 2025
 * @description A simple component that displays a greeting using the `greet` function from the utils package.
 * 
 * @example
 * import { GreetComponent } from "@movie-recommendation/ui";
 * 
 * function App() {
 *   return <GreetComponent name="Chace" />;
 * }
 */

import React from "react";
import { greet } from "@movie-recommendation/utils";

/**
 * A component that displays a greeting using the `greet` function from utils.
 */
export const GreetComponent: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="p-4 text-lg font-bold text-white bg-green-500 rounded-lg">
      {greet(name)}
    </div>
  );
};
