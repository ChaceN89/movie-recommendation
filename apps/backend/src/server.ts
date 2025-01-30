import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

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

const PORT = process.env.PORT || 4000;

// ✅ Only start the server if it's not being imported (prevents conflicts in tests)
if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}/graphql`);
  });
}

// ✅ Export the app for testing
export { app };
