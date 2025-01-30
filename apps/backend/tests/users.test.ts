import request from "supertest";
import { app } from "../src/server"; // Import the Express app for testing

/**
 * 📌 User API Tests
 * This file tests GraphQL queries and mutations related to users.
 */

describe("User API", () => {

  /**
   * ✅ Test Case 1: Fetch All Users
   * - Sends a GraphQL query to get all users.
   * - Expects a successful response with an array.
   */
  it("should fetch all users", async () => {
    const query = `
      query {
        users {
          id
          name
          email
        }
      }
    `;

    const response = await request(app)
      .post("/graphql")
      .send({ query });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data.users)).toBe(true);
  });

  /**
   * ✅ Test Case 2: Register a New User
   * - Sends a mutation to register a new user.
   * - Expects the response to contain the new user's data.
   */
  it("should register a new user", async () => {
    const mutation = `
      mutation {
        registerUser(name: "John Doe", email: "johndoe@example.com", password: "password123") {
          id
          name
          email
        }
      }
    `;

    const response = await request(app)
      .post("/graphql")
      .send({ query: mutation });

    expect(response.status).toBe(200);
    expect(response.body.data.registerUser.name).toBe("John Doe");
  });

});
