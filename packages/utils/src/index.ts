/**
 * @file index.ts
 * @author Chace Nielson
 * @created Jan 14, 2025
 * @updated Feb 2, 2025
 * @description Central export hub for utility functions, allowing for both full-package and modular imports.
 * 
 * @example
 * // Import all utilities
 * import { getEnv, logDebug, capitalize } from "@movie-recommendation/utils";
 * 
 * // Import individual utilities
 * import { getEnv } from "@movie-recommendation/utils/env";
 * import { logDebug } from "@movie-recommendation/utils/debug";
 * import { capitalize } from "@movie-recommendation/utils/format";
 */
import { logDebug, greet } from "./debug";
import { capitalize } from "./format";
import { getEnv } from "./env";

export { 
  getEnv,
  logDebug, greet, 
  capitalize 
};


// I could export everyhitn gfrom this file and then i can have this 
// import { getEnvVar, logDebug, capitalize } from "@movie-recommendation/utils";


// of i can exprot individual files and then i can have this
// import { getEnvVar } from "@movie-recommendation/utils/env";
// import { logDebug } from "@movie-recommendation/utils/debug";
// import { capitalize } from "@movie-recommendation/utils/format";