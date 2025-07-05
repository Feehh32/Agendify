const express = require("express");
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Campos obrigatórios faltando." });

  try {
    const userResult = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (userResult.rows.length === 0)
      return res.status(404).json({ error: "Email ou senha inválidos." });

    const user = userResult.rows[0];

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword)
      return res.status(404).json({ error: "Email ou senha inválidos." });

    const { id, name, type, avatar_url } = user;

    const token = jwt.sign(
      {
        id,
        email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.status(200).json({
      message: "Login efetuado com sucesso.",
      token,
      user: { id, name, email, type, avatar_url },
    });
  } catch (err) {
    console.error("Error no login:", err.message);
    return res.status(500).json({ message: "Server internal error" });
  }
});

module.exports = router;
