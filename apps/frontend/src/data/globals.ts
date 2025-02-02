// --- src/data/globals.ts ---
/**
 * @file globals.ts
 * @description Defines global environment variables using getEnv from utils.
 */
import { getEnv } from "@movie-recommendation/utils";

// Base settings for the application's ENV variables.
enum GlobalSettings {
  LOG_LEVEL = "NEXT_PUBLIC_LOG_LEVEL",
  ENABLE_DEBUG = "NEXT_PUBLIC_ENABLE_DEBUG",
  API_URL = "NEXT_PUBLIC_API_URL",
  IMAGE_BASE_URL = "NEXT_PUBLIC_IMAGE_BASE_URL",
  APP_NAME = "NEXT_PUBLIC_APP_NAME"
}

// Global environment variables for the application.
export const Globals = {
  LOG_LEVEL: getEnv(GlobalSettings.LOG_LEVEL, "info"),
  ENABLE_DEBUG: getEnv(GlobalSettings.ENABLE_DEBUG, "false") === "true",
  API_URL: getEnv(GlobalSettings.API_URL, ""),
  IMAGE_BASE_URL: getEnv(GlobalSettings.IMAGE_BASE_URL, ""),
  APP_NAME: getEnv(GlobalSettings.APP_NAME, "Movie App"),
};
