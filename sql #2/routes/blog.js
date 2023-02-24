const express = require("express");
const router = express.Router();
const db = require("../data/database");

router.get("/", (req, res) => {
  res.redirect("/posts");
});

router.get("/posts", async (req, res) => {
  const query = `SELECT posts.*,authors.name AS author_name FROM posts INNER JOIN authors ON posts.author_id = authors.id`;
  const [posts] = await db.query(query);
  res.render("posts-list", { posts: posts });
});

router.get("/new-post", async (req, res) => {
  const [authors] = await db.query("SELECT * FROM authors");
  res.render("create-post", { authors: authors });
});

router.post("/posts", async (req, res) => {
  const data = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,
  ];
  await db.query(
    "INSERT INTO posts (title,summary,body,author_id) VALUES (?)",
    [data]
  );
  res.redirect("/posts");
});

router.get("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const query = `
  SELECT posts.*,authors.name AS author_name,authors.email AS author_email FROM posts INNER JOIN authors ON posts.author_id = authors.id WHERE posts.id = ?
  `;
  const [post] = await db.query(query, [id]);
  if (!post || post.length === 0) {
    return res.status(404).render("404");
  }

  const postData = {
    ...post[0],
    date: post[0].date.toISOString(),
    humanDate: post[0].date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  res.render("post-detail", { post: postData });
});

router.get("/posts/:id/edit", async (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM posts WHERE id = ?`;
  const [posts] = await db.query(query, [id]);

  if (!posts || posts.length === 0) {
    return res.status(404).render("404");
  }

  res.render("update-post", { post: posts[0] });
});

router.post("/posts/:id/edit", async (req, res) => {
  const id = req.params.id;
  const query = `UPDATE posts SET title = ?, summary = ?, body = ? WHERE id = ?`;

  await db.query(query, [
    req.body.title,
    req.body.summary,
    req.body.content,
    id,
  ]);

  res.redirect(`/posts/${id}`);
});

router.post("/posts/:id/delete", async (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM posts WHERE id = ?`;
  await db.query(query, [id]);
  res.redirect("/posts");
});

module.exports = router;
