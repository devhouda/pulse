const express = require("express");
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
  const foundPost = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
  if (!foundPost) {
    return res.status(404).json({
      error: "Not Found",
      message: `The requested post with id '${id}' does not exist.`,
    });
  }
  res.json(foundPost.rows[0]);
});

app.post("/api/posts", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newPost = await pool.query(
    "INSERT INTO posts (title, description) VALUES ($1, $2) RETURNING *",
    [title, description],
  );

  res.json(newPost);
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
