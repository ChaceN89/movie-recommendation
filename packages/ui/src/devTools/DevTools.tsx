/**
 * @file DevTools.tsx
 * @author Chace Nielson
 * @created Jan 14, 2025
 * @updated Feb 2, 2025
 * @description A development-only component that displays Tailwind breakpoints and an optional dark mode toggle.
 * 
 * @example
 * import { DevTools } from "@movie-recommendation/ui";
 * 
 * function App() {
 *   return <DevTools noDarkMode={true} />;
 * }
 */

import React from "react";
import TailwindBreakpoints from "./TailwindBreakpoints";
import DarkModeToggle from "./DarkModeToggle";
import { getEnv } from "@movie-recommendation/utils";

interface DevToolsProps {
  noDarkMode?: boolean; // Optional prop to disable DarkModeToggle
}

export const DevTools: React.FC<DevToolsProps> = ({ noDarkMode = false }) => {
  const isDevelopment = getEnv("NODE_ENV", "false") === "development";

  if (!isDevelopment) return null;

  return (
    <>
      <TailwindBreakpoints />
      {!noDarkMode && <DarkModeToggle />} {/* Render DarkModeToggle only if noDarkMode is false */}
    </>
  );
};
