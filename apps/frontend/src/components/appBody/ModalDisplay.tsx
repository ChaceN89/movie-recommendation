/**
 * @file MovieDisplay.tsx
 * @module MovieDisplay
 * @description Detects a `movie` query parameter in the URL and displays `MovieModal` if present.
 *              This allows modals to open dynamically without navigating away from the page.
 *
 * @see {@link https://nextjs.org/docs/app/api-reference/functions/use-search-params | Next.js useSearchParams}
 *
 * @example
 * // URL: "/?movie=123"
 * <MovieDisplay /> // This will render `MovieModal` with Movie ID: 123
 *
 * @author Chace Nielson
 * @created Jan 23, 2025
 * @updated Feb 2, 2025
 * @returns {JSX.Element} The rendered component, displaying a movie modal if a valid `movie` query param exists.
 */
"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Modal from "./Modal";
import Movie from "../movies/Movie";

export default function MovieDisplay() {
  const searchParams = useSearchParams(); // Get current query parameters
  const router = useRouter(); // Next.js navigation
  const movieID = searchParams.get("movie"); // Extract movie ID from URL

  const handleClose = () => {
    router.push("/", { scroll: false }); // Removes `?movie=ID` from URL without reloading
  };

  return (
    <>
      {movieID && (
        <Modal onClose={handleClose}>
          <Movie movieID={movieID} />
        </Modal>
      )}
    </>
  );
}
