// __mocks__/db.js
// amount, user_from, user_to

const mockPool = {
  query: jest.fn().mockImplementation((query, values) => {
    // Assuming the query is for selecting todos
    if (query.startsWith("SELECT")) {
      return Promise.resolve({
        rows: [
          {
            id: 1,
            amount: 10,
            user_from: 1,
            user_to: 1,
          },
          {
            id: 2,
            amount: 20,
            user_from: 2,
            user_to: 2,
          },
          {
            id: 3,
            amount: 30,
            user_from: 3,
            user_to: 3,
          },
        ],
      });
    }
    // Add other conditions for different types of queries as needed
  }),
};

module.exports = mockPool;
