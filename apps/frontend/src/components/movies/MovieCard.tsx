/**
 * @file MovieCard.tsx
 * @module MovieCard
 * @description A movie card component that displays an image, name, and ID, with a link to open a modal.
 *
 * @author Chace Nielson
 * @created Feb 2, 2025
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MovieProps {
  movie: {
    id: number;
    name: string;
    url: string;
  };
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <Link href={`/?movie=${movie.id}`} scroll={false} className="group">
      <div className="bg-secondary-dark rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
        <Image
          src={movie.url}
          alt={movie.name}
          width={250}
          height={375}
          className="w-full h-auto object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-font-light group-hover:text-accent transition">
            {movie.name}
          </h3>
          <p className="text-sm text-font-dark">ID: {movie.id}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
