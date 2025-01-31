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
