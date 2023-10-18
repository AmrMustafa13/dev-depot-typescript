import { Comment } from "../types";

export interface CommentDao {
  createComment(comment: Comment): void;
  getCommentsByPostId(postId: string): Comment[];
  deleteComment(id: string): void;
}
