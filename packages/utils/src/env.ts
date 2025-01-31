import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import * as fs from "fs"; // Ensure fs is imported

// ✅ Fix for ES Modules: Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Function to find the monorepo root dynamically
const findMonorepoRoot = (): string => {
  let currentDir = __dirname; // Start from this file's directory

  while (currentDir !== path.parse(currentDir).root) {
    if (fs.existsSync(path.join(currentDir, "pnpm-workspace.yaml")) || fs.existsSync(path.join(currentDir, ".git"))) {
      return currentDir; // Found the monorepo root
    }
    currentDir = path.dirname(currentDir); // Move up one level
  }

  throw new Error("❌ Could not find the monorepo root!");
};

// ✅ Get the correct monorepo root dynamically
const monorepoRoot = findMonorepoRoot();

// ✅ Determine the correct env file path
const envFile = `.env.${process.env.NODE_ENV || "development"}`;
const envPath = path.join(monorepoRoot, envFile);

console.log(`✅ Loaded environment variables from ${envFile}`);
console.log(`✅ Path: ${envPath}`);
console.log(`✅ Monorepo Root: ${monorepoRoot}`);

// ✅ Check if the env file exists before loading
if (fs.existsSync(envPath)) {
  console.log(`📌 Loading environment variables from: ${envPath}`);
  dotenv.config({ path: envPath });
} else {
  console.warn(`⚠️ Warning: Env file not found at ${envPath}. Some env variables may be missing.`);
}

/**
 * Retrieves an environment variable safely.
 * Throws an error if it's missing.
 */
export function getEnvVar(key: string, fallback?: string): string {
  const value = process.env[key];
  if (!value && fallback !== undefined) {
    return fallback;
  } else if (!value) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
  return value;
}

// Boolean flags for environment checking
export const inProd = process.env.NODE_ENV === "production";
export const inDev = process.env.NODE_ENV === "development";
