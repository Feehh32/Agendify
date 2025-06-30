const express = require("express");
const pool = require("../db");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, profession } = req.body;

  if (!name || !email || !password || !profession) {
    return res.status(400).json({ error: "Campos obrigatórios faltando." });
  }

  // Email pattern confirmartion
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Formato de e-mail inválido." });
  }

  // Strong password pattern confirmation
  const strongPasswordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!strongPasswordRegex.test(password)) {
    return res.status(400).json({
      error:
        "A senha deve ter ao menos 8 caracteres, com letra, número e símbolo.",
    });
  }

  try {
    // Check if email already exists
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: "Este email já existe." });
    }

    // Crypt password
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    // Insert new user
    const result = await pool.query(
      `INSERT INTO users (name, email, password_hash, profession)
        VALUES ($1, $2, $3, $4)
        RETURNING id, name, email, profession`,
      [name, email, password_hash, profession]
    );

    res
      .status(201)
      .json({
        message: "Usuário cadastrado com sucesso.",
        user: result.rows[0],
      });
  } catch (err) {
    console.error("Error on register:", err.message);
    res.status(500).json({ message: "Server internal error" });
  }
});

module.exports = router;
