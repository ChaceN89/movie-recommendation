import { logDebug, greet } from "./debug";
import { capitalize } from "./format";

export { 
  logDebug, greet, 
  capitalize 
};


// I could export everyhitn gfrom this file and then i can have this 
// import { getEnvVar, logDebug, capitalize } from "@movie-recommendation/utils";


// of i can exprot individual files and then i can have this
// import { getEnvVar } from "@movie-recommendation/utils/env";
// import { logDebug } from "@movie-recommendation/utils/debug";
// import { capitalize } from "@movie-recommendation/utils/format";