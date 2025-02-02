/**
 * @file Home.tsx
 * @module Home
 * @description Displays a grid of movie cards with random images.
 *
 * @author Chace Nielson
 * @created Feb 2, 2025
 */

import React from "react";
import MovieCard from "@/components/movies/MovieCard";

export default function Home() {
  // Dummy movie data with random free API images
  const movies = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: `Movie ${i + 1}`,
    url: `https://picsum.photos/250/375?random=${i + 1}`, // Random image for each movie
  }));

  // Need to adjsut the nextconfig wit hthe urls i access to allow it to work when i add real urls

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-font-light mb-8">Movie Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
