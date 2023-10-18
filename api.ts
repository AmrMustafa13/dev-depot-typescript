import { Post } from "./types";

// Post API
export interface GetPostsRequest {}
export interface GetPostsResponse {
  posts: Post[];
}

export type CreatePostRequest = Pick<Post, "title" | "url" | "userId">;
export interface CreatePostResponse {}

export interface GetPostRequest {}
export interface GetPostResponse {
  post: Post;
}
