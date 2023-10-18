import express, { RequestHandler } from "express";
import { db } from "./data";

const app = express();

app.use(express.json());

const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
  console.log(req.method, req.path, req.body);
  next();
};

app.use(requestLoggerMiddleware);

app.get("/posts", (req, res) => {
  res.send({
    posts: db.getPosts(),
  });
});

app.post("/posts", (req, res) => {
  const post = req.body;
  db.createPost(post);
  res.send(post);
});

app.listen(5000, () => console.log("Server running on port 5000"));
