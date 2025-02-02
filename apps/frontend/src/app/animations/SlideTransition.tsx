/**
 * @file SlideTransition.tsx
 * @module SlideTransition
 * @description A reusable animation wrapper that applies slide-in and slide-out effects using Framer Motion.
 *              Supports customizable directions, animation durations, and delays.
 *
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 *
 * @example
 * // Example usage:
 * <SlideTransition enter="right" exit="left" duration={0.5}>
 *   <p>Sliding content</p>
 * </SlideTransition>
 *
 * @author Chace Nielson
 * @created Jan 23, 2025
 * @updated Feb 2, 2025
 *
 * @param {React.ReactNode} children - The content to be wrapped in the animation.
 * @param {"left" | "right" | "top" | "bottom"} [enter="left"] - The direction from which the element enters.
 * @param {"left" | "right" | "top" | "bottom"} [exit="left"] - The direction in which the element exits.
 * @param {number} [duration=0.5] - The duration of the slide transition in seconds.
 * @param {number} [delay=0] - Delay before the transition starts, in seconds.
 * @param {number} [translationDist=200] - The distance in pixels the element moves during the transition.
 * @param {string} [className=""] - Optional CSS classes to style the container.
 *
 * @returns {JSX.Element} A motion-wrapped div that applies the slide transition.
 */
"use client";
import React from "react";
import { motion } from "framer-motion";

interface SlideTransitionProps {
  children: React.ReactNode;
  enter?: "left" | "right" | "top" | "bottom";
  exit?: "left" | "right" | "top" | "bottom";
  duration?: number;
  delay?: number;
  translationDist?: number;
  className?: string;
}

const SlideTransition: React.FC<SlideTransitionProps> = ({
  children,
  enter = "left",
  exit = "left",
  duration = 0.5,
  delay = 0,
  translationDist = 200,
  className = "",
}) => {
  const movX = translationDist;
  const movY = translationDist; // Added for top/bottom movement

  // Framer Motion animation variants
  const variants = {
    hidden: {
      opacity: 0,
      x: enter === "left" ? -movX : enter === "right" ? movX : 0,
      y: enter === "top" ? -movY : enter === "bottom" ? movY : 0,
    },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: {
      opacity: 0,
      x: exit === "left" ? -movX : exit === "right" ? movX : 0,
      y: exit === "top" ? -movY : exit === "bottom" ? movY : 0,
    },
  };

  const transition = {
    type: "tween",
    duration,
    ease: "easeInOut",
    delay,
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideTransition;
