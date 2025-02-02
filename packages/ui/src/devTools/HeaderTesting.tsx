/**
 * @file HeaderTesting.tsx
 * @module HeaderTesting
 * @description A React component designed to visually display and test typography styles for various header and paragraph elements.
 *
 * @component HeaderTesting
 * 
 * @requires react
 * 
 * @description
 * - Provides a sample layout for testing typography styles defined in the global theme.
 * - Includes headers (h1 to h6) and a paragraph element with dummy text.
 * - Useful for development and debugging to ensure consistent typography application.
 * 
 * @example
 * <HeaderTesting />
 * 
 * @author Chace Nielson
 * @created Feb 2, 2025
 * @updated Feb 2, 2025
 */

import React from "react";

const HeaderTesting: React.FC = () => {
  return (
    <div className="p-10 space-y-4">
      <h1>Header 1: The Quick Brown Fox</h1>
      <h2>Header 2: Jumps Over the Lazy Dog</h2>
      <h3>Header 3: Lorem Ipsum Dolor Sit Amet</h3>
      <h4>Header 4: Consectetur Adipiscing Elit</h4>
      <h5>Header 5: Sed Do Eiusmod Tempor</h5>
      <h6>Header 6: Incididunt Ut Labore Et Dolore</h6>
      <p>
        Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};

export default HeaderTesting;
