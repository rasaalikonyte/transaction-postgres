const request = require("supertest");
const app = require("./app");

jest.mock('./db');

describe("GET /transactions", () => {
  test("respond with JSON message", async () => {
    const response = await request(app).get("/transactions");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /transactions", () => {
  test("should create a new transaction and return 201 status code", async () => {
    // Mock request body
    const newTransaction = {
      amount: 100,
      user_from: 1,
      user_to: 2,
    };

    // Send POST request to the endpoint
    const response = await request(app)
      .post("/transactions")
      .send(newTransaction);

    // Check if the response status code is 201
    expect(response.status).toBe(201);

    // Check if the response body contains the expected message
    expect(response.body).toEqual({
      message: "Transaction created successfully",
    });
  });

  test("should return 500 status code if an error occurs during transaction creation", async () => {
    // Mock request body
    const newTransaction = {
      amount: 100,
      user_from: 1,
      user_to: 2,
    };
  });
});
