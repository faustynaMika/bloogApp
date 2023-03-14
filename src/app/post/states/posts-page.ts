import {Post} from "../models/post";

export interface PostsPage {
  loading: boolean;
  posts: Post[];
  formStatus: string;
  totalPosts?: number;
}
