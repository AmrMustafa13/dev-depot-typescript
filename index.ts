import express, { RequestHandler } from "express";

const app = express();

app.use(express.json());

const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
  console.log(req.body);
  next();
};

app.use(requestLoggerMiddleware);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(5000, () => console.log("Server running on port 5000"));
