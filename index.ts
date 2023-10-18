import express, { ErrorRequestHandler, RequestHandler } from "express";
import { getPosts, createPost } from "./controllers/postControllers";

const app = express();

app.use(express.json());

const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
  console.log(req.method, req.path, req.body);
  next();
};

app.use(requestLoggerMiddleware);

app.get("/v1/posts", getPosts);
app.post("/v1/posts", createPost);

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.log("Uncaught Exception", err);
  res.status(500).send({ error: "Something went wrong. please try again" });
};

app.use(errorHandlerMiddleware);

app.listen(5000, () => console.log("Server running on port 5000"));
