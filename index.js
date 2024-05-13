const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes

// Create transaction
app.post("/transactions", async (req, res) => {
  const { amount, user_from, user_to } = req.body;
  try {
    await pool.query(
      "INSERT INTO transactions (amount, user_from, user_to) VALUES ($1, $2, $3)",
      [amount, user_from, user_to]
    );
    res.status(201).json({ message: "Transaction created successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all transactions
app.get("/transactions", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM transactions");
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
