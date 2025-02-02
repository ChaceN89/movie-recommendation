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
 *   return <DevTools noDarkMode={true} noModifyTitle={true} />;
 * }
 */

import React from "react";

// Dev Testing Tools
import TailwindBreakpoints from "./TailwindBreakpoints";
import DarkModeToggle from "./DarkModeToggle";
import ModifyTitle from "./ModifyTitle";

// Load environment variables utility
import { getEnv } from "@movie-recommendation/utils";

interface DevToolsProps {
  noDarkMode?: boolean; // Optional prop to disable DarkModeToggle
  noModifyTitle?: boolean; // Optional prop to disable ModifyTitle
}

export const DevTools: React.FC<DevToolsProps> = ({ noDarkMode = false, noModifyTitle = false }) => {
  const isDevelopment = getEnv("NODE_ENV", "false") === "development";

  if (!isDevelopment) return null;

  return (
    <>
      <TailwindBreakpoints />
      {!noDarkMode && <DarkModeToggle />} 
      {!noModifyTitle && <ModifyTitle />} 
    </>
  );
};
