import express, { RequestHandler } from "express";
import { getPosts, createPost } from "./controllers/postControllers";

const app = express();

app.use(express.json());

const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
  console.log(req.method, req.path, req.body);
  next();
};

app.use(requestLoggerMiddleware);

app.get("/posts", getPosts);

app.post("/posts", createPost);

app.listen(5000, () => console.log("Server running on port 5000"));
