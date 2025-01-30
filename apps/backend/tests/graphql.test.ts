import request from "supertest";
import { app } from "../src/server"; // Import the Express app to test

/**
 * 📌 GraphQL API Tests
 * This file tests the GraphQL API to ensure that queries return the expected results.
 * - Uses `supertest` to send HTTP requests to the `/graphql` endpoint.
 * - Checks if the server responds correctly with the expected values.
 */

describe("GraphQL API", () => {
  
  /**
   * ✅ Test Case 1: Query `hello`
   * - Sends a GraphQL query to request the `hello` field.
   * - Expects the response to be `"Hello, world!"`.
   */
  it("should return 'Hello, world!' from the test query", async () => {
    // GraphQL query string for the 'hello' field
    const query = `
      query {
        hello
      }
    `;

    // Send a request to the GraphQL endpoint
    const response = await request(app)
      .post("/graphql") // POST request to /graphql
      .send({ query });

    // Validate the response
    expect(response.status).toBe(200); // Ensure HTTP status is 200 (OK)
    expect(response.body.data.hello).toBe("Hello, world!"); // Ensure correct data response
  });

  /**
   * ✅ Test Case 2: Query `goodbye`
   * - Sends a GraphQL query to request the `goodbye` field.
   * - Expects the response to be `"Goodbye, world!"`.
   */
  it("should return 'Goodbye, world!' from the new test query", async () => {
    // GraphQL query string for the 'goodbye' field
    const query = `
      query {
        goodbye
      }
    `;

    // Send a request to the GraphQL endpoint
    const response = await request(app)
      .post("/graphql") // POST request to /graphql
      .send({ query });

    // Validate the response
    expect(response.status).toBe(200); // Ensure HTTP status is 200 (OK)
    expect(response.body.data.goodbye).toBe("Goodbye, world!"); // Ensure correct data response
  });

});
