import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import cors from "cors";

// ✅ Import from utils package
import { greet, getEnv } from "@movie-recommendation/utils"; // Package test

const app = express();
app.use(cors());

const port = 4000;

console.log(greet("Backend-Utils ✅ "));
const envVars = {
  AWS_DYNAMODB_TABLE: getEnv("AWS_DYNAMODB_TABLE", "Unknown App"),
  NEXT_PUBLIC_API_URL: getEnv("NEXT_PUBLIC_API_URL", "Unknown App"),
  NEXT_PUBLIC_IMAGE_BASE_URL: getEnv("NEXT_PUBLIC_IMAGE_BASE_URL", "Unknown App"),
  NEXT_PUBLIC_APP_NAME: getEnv("NEXT_PUBLIC_APP_NAME", "Unknown App"),
  NEXT_PUBLIC_LOG_LEVEL: getEnv("NEXT_PUBLIC_LOG_LEVEL", "Unknown App"),
  NEXT_PUBLIC_ENABLE_DEBUG: getEnv("NEXT_PUBLIC_ENABLE_DEBUG", "Unknown App"),
  JWT_SECRET: getEnv("JWT_SECRET", "Unknown App"), // ✅ Only for backend
  AWS_S3_BUCKET: getEnv("AWS_S3_BUCKET", "Unknown App"),
};

// ✅ Print environment variables in a structured format
console.log("🔍 Server Environment Variables:");
console.log("--------------------------------");
Object.entries(envVars).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
console.log("--------------------------------");



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
