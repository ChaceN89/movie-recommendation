/**
 * @file Movie.tsx
 * @module Movie
 * @description Displays movie details inside a modal when triggered, including an image.
 *
 * @author Chace Nielson
 * @created Feb 2, 2025
 */

import React from "react";
import Image from "next/image";

interface MovieProps {
  movieID: string;
}

const Movie: React.FC<MovieProps> = ({ movieID }) => {
  const imageUrl = `https://picsum.photos/300/450?random=${movieID}`;

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold text-font-light">Movie Details</h2>
      <p className="text-sm text-font-dark mb-4">Movie ID: {movieID}</p>

      <div className="mx-auto w-[300px] h-[450px] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={imageUrl}
          alt={`Movie poster for ID ${movieID}`}
          width={300}
          height={450}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Movie;
