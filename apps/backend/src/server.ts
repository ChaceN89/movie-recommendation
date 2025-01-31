import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import cors from "cors";

// ✅ Import from utils package
import { greet } from "@movie-recommendation/utils"; // Package test

const app = express();
app.use(cors());

const port = 4000;

console.log(greet("Backend-Utils ✅ "));


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
