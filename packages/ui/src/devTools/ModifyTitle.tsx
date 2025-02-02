/**
 * @file ModifyTitle.tsx
 * @author Chace Nielson
 * @created Feb 2, 2025
 * @updated Feb 2, 2025
 * @description A development-only component that modifies the document title by prefixing it with "Dev | ".
 * 
 * @example
 * import ModifyTitle from "@movie-recommendation/ui/devTools/ModifyTitle";
 * 
 * function App() {
 *   return <ModifyTitle />;
 * }
 */

"use client"; // Ensure this runs only in the client

import { useEffect } from "react";

const ModifyTitle: React.FC = () => {
  useEffect(() => {
    if (typeof document !== "undefined" && !document.title.startsWith("Dev | ")) {
      document.title = `Dev | ${document.title}`;
    }
  }, []);

  return null; // This component only modifies the title, so it doesn't render anything
};

export default ModifyTitle;
