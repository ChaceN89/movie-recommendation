import dotenv from "dotenv";

dotenv.config(); // Load environment variables from a `.env` file

/**
 * Retrieves an environment variable, with an optional fallback.
 * @param key - The name of the environment variable.
 * @param fallback - The fallback value if the variable is not found.
 * @returns The environment variable or fallback value.
 */
export function getEnvVar(key: string, fallback?: string): string {
  const value = process.env[key];
  if (!value && fallback !== undefined) {
    return fallback;
  } else if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

// inProd and inDev Bool retuns
export const inProd = process.env.NODE_ENV === "production";
export const inDev = process.env.NODE_ENV === "development";
