CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    amount NUMERIC(10, 2) NOT NULL,
    user_from INT REFERENCES users(id),
    user_to INT REFERENCES users(id)
);

SELECT u.name AS user_name, SUM(t.amount) AS total_amount_received
FROM users u
JOIN transactions t ON u.id = t.user_to
GROUP BY u.name
ORDER BY total_amount_received DESC
LIMIT 1;

SELECT SUM(amount) AS total_amount_sent
FROM transactions;