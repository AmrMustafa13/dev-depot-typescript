import {
  CreatePostRequest,
  CreatePostResponse,
  GetPostsRequest,
  GetPostsResponse,
  GetPostRequest,
  GetPostResponse,
} from "../api";
import { db } from "../data";
import { ExpressHandler, Post } from "../types";

export const getPosts: ExpressHandler<GetPostsRequest, GetPostsResponse> = (
  req,
  res
) => {
  res.send({
    posts: db.getPosts(),
  });
};

export const createPost: ExpressHandler<
  CreatePostRequest,
  CreatePostResponse
> = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({ error: "Title is required" });
  }

  if (!req.body.url) {
    return res.status(400).send({ error: "URL is required" });
  }

  if (!req.body.userId) {
    return res.status(400).send({ error: "User ID is required" });
  }

  if (!req.body.title || !req.body.url || !req.body.userId) {
    return res.status(400);
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
