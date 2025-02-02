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
import HeaderTesting from "./HeaderTesting";
import ColorBoxes from "./ColorBoxes";

// Load environment variables utility
import { getEnv } from "@movie-recommendation/utils";

interface DevToolsProps {
  noDarkMode?: boolean;
  noModifyTitle?: boolean;
  showColorBoxes?: boolean;
  showHeaders?: boolean;
}

export const DevTools: React.FC<DevToolsProps> = ({
  noDarkMode = false,
  noModifyTitle = false,
  showColorBoxes = false,
  showHeaders = false,
}) => {
  
  const isDevelopment = getEnv("NODE_ENV", "false") === "development";

  if (!isDevelopment) return null;

  return (
    <>
      <TailwindBreakpoints />
      {!noDarkMode && <DarkModeToggle />} 
      {!noModifyTitle && <ModifyTitle />} 
      {showColorBoxes && <ColorBoxes />} 
      {showHeaders && <HeaderTesting />} 
    </>
  );
};
