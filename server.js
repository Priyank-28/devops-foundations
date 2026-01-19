const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "postgres",
});

app.get("/health", (req, res) => res.status(200).send("ok"));

app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW() as now");
    res.json({ db_time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Docker Compose Day 8");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
