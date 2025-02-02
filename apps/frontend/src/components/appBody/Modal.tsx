/**
 * @file Modal.tsx
 * @module Modal
 * @description A reusable modal component with smooth enter and exit animations using Framer Motion.
 *              Prevents background scrolling and interactions, supports Escape key closing, and provides
 *              customizable slide transitions in any direction.
 *
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 *
 * @author Chace Nielson
 * @created Jan 23, 2025
 * @updated Feb 2, 2025
 */
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

// animations
import SlideTransition from "@/app/animations/SlideTransition";

export default function Modal({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  // Handle closing with animation before unmounting
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 600); // Wait for animation to complete before removing from DOM
  };

  // Prevent scrolling & disable pointer events when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Prevent scrolling
    document.body.style.pointerEvents = "none"; // Disable background interactions

    return () => {
      document.body.style.overflow = ""; // Restore scrolling
      document.body.style.pointerEvents = ""; // Restore interactions
    };
  }, []);

  // Close modal on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={handleClose}
          style={{ pointerEvents: "auto" }} // Allow clicking inside modal
        >
          <SlideTransition
            enter="bottom"
            exit="top"
            duration={0.6}
            translationDist={600}
            className="bg-secondary p-6 rounded-lg shadow-lg max-w-md relative"
          >
            <button className="absolute top-2 right-2 text-white hover:text-accent" onClick={handleClose}>
              <IoMdClose size={24} />
            </button>
            {children}
          </SlideTransition>
        </div>
      )}
    </AnimatePresence>
  );
}
