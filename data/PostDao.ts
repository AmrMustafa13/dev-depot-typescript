import { Post } from "../types";

export interface PostDao {
  getPosts(): Post[];
  createPost(post: Post): void;
  getPostById(id: string): Post | undefined;
  deletePost(id: string): void;
}
