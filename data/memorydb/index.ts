import { Post, User, Comment, Like } from "../../types.js";
import { DataStore } from "../";

export class InMemoryDataStore implements DataStore {
  private users: User[] = [];
  private posts: Post[] = [];
  private comments: Comment[] = [];
  private likes: Like[] = [];

  getPosts(): Post[] {
    return this.posts;
  }
  createPost(post: Post): void {
    this.posts.push(post);
  }
  getPostById(id: string): Post | undefined {
    return this.posts.find((post) => post.id === id);
  }
  deletePost(id: string): void {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index > -1) {
      this.posts.splice(index, 1);
    }
  }
  createUser(user: User): void {
    this.users.push(user);
  }
  getUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
  getUserByUserName(userName: string): User | undefined {
    return this.users.find((user) => user.userName === userName);
  }
  createComment(comment: Comment): void {
    this.comments.push(comment);
  }
  getCommentsByPostId(postId: string): Comment[] {
    return this.comments.filter((comment) => comment.postId === postId);
  }
  deleteComment(id: string): void {
    const index = this.comments.findIndex((comment) => comment.id === id);
    if (index > -1) {
      this.comments.splice(index, 1);
    }
  }
  createLike(like: Like): void {
    this.likes.push(like);
  }
}
