/**
 * @file env.ts
 * @author Chace Nielson
 * @created Jan 14, 2025
 * @updated Feb 2, 2025
 * @description Utility functions for managing environment variables in both frontend and backend.
 * 
 * This module provides a safe way to access environment variables, ensuring compatibility across different environments.
 * It also loads the appropriate `.env` file based on `NODE_ENV`.
 * 
 * @example
 * import { getEnv } from "@movie-recommendation/utils";
 * 
 * const apiUrl = getEnv("NEXT_PUBLIC_API_URL", "https://default-api.com");
 * console.log(apiUrl);
 */
import {findUpSync} from 'find-up'
import dotenv from "dotenv";
import path from "path";

// Function to locate the closest .env file based on NODE_ENV
export const findEnvFile = (): string | undefined => {
  const envFileName = `.env.${process.env.NODE_ENV || "development"}`;
  const filePath = findUpSync(envFileName, { cwd: process.cwd() });

  return filePath ? path.resolve(filePath) : undefined;
};

// Load the environment file (only on the server)
const envFilePath = findEnvFile();
if (envFilePath && typeof window === "undefined") {
  dotenv.config({ path: envFilePath });
  console.log(`🚀 Loaded environment file: ${envFilePath}`);
}

// Function to get env variables safely (works in both frontend & backend)
export const getEnv = (key: string, fallback?: string): string => {
  if (typeof window !== "undefined") {
    // Frontend: Read from process.env (injected by Next.js)
    return process.env[key] ?? fallback ?? "";
  }

  // Backend: Read from process.env (loaded by dotenv)
  return process.env[key] ?? fallback ?? "";
};
