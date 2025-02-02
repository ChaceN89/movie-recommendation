/**
 * @file format.ts
 * @author Chace Nielson
 * @created Jan 14, 2025
 * @updated Feb 2, 2025
 * @description Utility function for formatting text by capitalizing the first letter of a word.
 * 
 * @example
 * capitalize("hello"); // Returns "Hello"
 */

export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
