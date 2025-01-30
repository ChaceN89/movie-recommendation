import request from "supertest";
import { app } from "../src/server"; // Import the Express app for testing

/**
 * 📌 Movie API Tests
 * This file tests GraphQL queries and mutations related to movies.
 */

describe("Movie API", () => {
  
  /**
   * ✅ Test Case 1: Fetch All Movies
   * - Sends a GraphQL query to get all movies.
   * - Expects a successful response with an array.
   */
  it("should fetch all movies", async () => {
    const query = `
      query {
        movies {
          id
          name
          genre
        }
      }
    `;

    const response = await request(app)
      .post("/graphql")
      .send({ query });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data.movies)).toBe(true);
  });

  /**
   * ✅ Test Case 2: Add a New Movie
   * - Sends a mutation to create a movie.
   * - Expects the response to contain the new movie's data.
   */
  it("should add a new movie", async () => {
    const mutation = `
      mutation {
        addMovie(name: "Inception", genre: "Sci-Fi") {
          id
          name
          genre
        }
      }
    `;

    const response = await request(app)
      .post("/graphql")
      .send({ query: mutation });

    expect(response.status).toBe(200);
    expect(response.body.data.addMovie.name).toBe("Inception");
  });

});
