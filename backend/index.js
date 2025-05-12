const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const pool = require("./db");

app.get("/", async (req, res) => {
  res.send("Api working and ready");
});

app.get("/categories", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM categories");
    res.json({ rows });
  } catch (err) {
    console.error("Error on categories search:", err.message);
    res.status(500).send("Error on server");
  }
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
