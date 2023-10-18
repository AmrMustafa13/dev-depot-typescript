import { RequestHandler } from "express";
import { db } from "../data";
import { ExpressHandler, Post } from "../types";

export const getPosts: ExpressHandler<{}, {}> = (req, res) => {
  res.send({
    posts: db.getPosts(),
  });
};

type CreatePostRequest = Pick<Post, "title" | "url" | "userId">;

interface CreatePostResponse {}

export const createPost: ExpressHandler<
  CreatePostRequest,
  CreatePostResponse
> = (req, res) => {
  if (!req.body.title || !req.body.url || !req.body.userId) {
    return res.status(400).send({ error: "Post is required" });
  }
  const post: Post = {
    id: Date.now().toString(),
    title: req.body.title,
    url: req.body.url,
    userId: req.body.userId,
    createdAt: Date.now(),
  };
  db.createPost(post);
  res.send(post);
};
