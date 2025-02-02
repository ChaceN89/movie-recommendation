/**
 * @file ColorBoxes.tsx
 * @module ColorBoxes
 * @description React component to display a palette of theme colors using Tailwind CSS classes.
 *              This component renders a 3x3 grid of color boxes to visually test the Tailwind theme colors.
 *
 * @component ColorBoxes
 * 
 * @requires react
 * @requires tailwindcss
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://tailwindcss.com/docs | Tailwind CSS Documentation}
 * 
 * @returns {JSX.Element} The rendered ColorBoxes component.
 * 
 * @example
 * <ColorBoxes />
 * 
 * @author Chace Nielson
 * @created Jul 26, 2024
 * @updated Feb 2, 2025
 * @since 2.1
 */

import React from "react";

interface Color {
  name: string;
  className: string;
}

const colors: Color[] = [
  { name: "Primary", className: "bg-primary hover:bg-primary-dark" },
  { name: "Primary Dark", className: "bg-primary-dark hover:bg-primary-darker" },
  { name: "Primary Darker", className: "bg-primary-darker hover:bg-primary-dark" },

  { name: "Secondary", className: "bg-secondary hover:bg-secondary-dark" },
  { name: "Secondary Dark", className: "bg-secondary-dark hover:bg-secondary-darker" },
  { name: "Secondary Darker", className: "bg-secondary-darker hover:bg-secondary-dark" },

  { name: "Accent", className: "bg-accent hover:bg-accent-dark" },
  { name: "Accent Dark", className: "bg-accent-dark hover:bg-accent-darker" },
  { name: "Accent Darker", className: "bg-accent-darker hover:bg-accent-dark" },
];

const ColorBoxes: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 text-center font-semibold">Color Palette</h2>
      <div className="grid grid-cols-3 gap-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`p-4 ${color.className} text-center transition duration-300 ease-in-out transform rounded-md shadow-md`}
          >
            <p className="text-white font-semibold">{color.name}</p>
            <p className="text-xs text-gray-200">{color.className.split(" ")[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorBoxes;
