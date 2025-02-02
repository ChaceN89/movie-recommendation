/**
 * @file debug.ts
 * @author Chace Nielson
 * @created Jan 14, 2025
 * @updated Feb 2, 2025
 * @description Utility functions for logging debug messages and basic greetings.
 * 
 * @example
 * logDebug("This is a debug message.");
 * greet("Chace");
 */
export function logDebug(message: string): void {
  if (process.env.NODE_ENV === "development") {
    console.debug(`[DEBUG] ${message}`);
  }
}

export function greet(name: string): string {
  return `Hello, ${name}!`;
}
