import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import cors from "cors";

// ✅ Import from utils package
import { getEnvVar, inProd, inDev } from "@movie-recommendation/utils";
import { greet } from "@movie-recommendation/utils"; // Package test

const app = express();
app.use(cors());

// ✅ Load environment variables
const databaseUrl = getEnvVar("DATABASE_URL");
const jwtSecret = getEnvVar("JWT_SECRET");
const port = getEnvVar("PORT", "4000");

// ✅ Print environment info for debugging (REMOVE BEFORE COMMITTING)
console.log(`✅ Loaded environment variables:`);
console.log(`- DATABASE_URL: ${databaseUrl}`);
console.log(`- JWT_SECRET: (hidden)`);
console.log(`- PORT: ${port}`);
console.log(`- Running in ${inProd ? "PRODUCTION" : "DEVELOPMENT"} mode`);
console.log(greet("Backend-Utils!!!"));



// GraphQL Schema
const schema = buildSchema(`
  type Query {
    hello: String
    goodbye: String
  }
`);

// Resolvers
const root = {
  hello: () => "Hello, world!",
  goodbye: () => "Goodbye, world!"
};

// Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // GraphiQL UI for testing
  })
);

// ✅ Only start the server if it's not being imported (prevents conflicts in tests)
if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(port, () => {
    console.log(`🚀 Backend running on http://localhost:${port}/graphql`);
  });
}

// ✅ Export the app for testing
export { app };
