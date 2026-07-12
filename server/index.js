const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const posts = [
  {
    id: 1,
    title: "Post1",
    description: "description of post 1",
  },
  {
    id: 2,
    title: "Post2",
    description: "description of post 2",
  },
  {
    id: 3,
    title: "Post3",
    description: "description of post 3",
  },
];

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const foundPost = posts.find((post) => post.id === id);
  if (!foundPost) {
    return res.status(404).json({
      error: "Not Found",
      message: `The requested post with id '${id}' does not exist.`,
    });
  }
  res.json(foundPost);
});

app.post("/api/posts", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newPost = {
    id: posts.length + 1,
    title,
    description,
  };

  posts.push(newPost);
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
