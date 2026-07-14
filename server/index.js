const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const pool = require("./db");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/posts", async (req, res) => {
  const result = await pool.query("SELECT * FROM posts ORDER BY id");
  res.json(result.rows);
});

app.get("/api/posts/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
  if (result.rows.length === 0) {
    return res.status(404).json({
      error: "Not Found",
      message: `The requested post with id '${id}' does not exist.`,
    });
  }
  res.json(result.rows[0]);
});

app.post("/api/posts", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newPost = await pool.query(
    "INSERT INTO posts (title, description) VALUES ($1, $2) RETURNING *",
    [title, description],
  );

  res.json(newPost.rows[0]);
});

app.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING id, username",
      [username, hash],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === "23505") {
      // Postgres unique violation
      return res.status(409).json({ error: "Username already taken" });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  if (result.rows.length === 0) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const user = result.rows[0];
  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );
  res.json({ token });
});

app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    error: "Not Found",
    message: `The requested path '${req.originalUrl}' does not exist.`,
  });
});

app.listen(port, () => {
  console.log("Server listening on port 3000");
});
