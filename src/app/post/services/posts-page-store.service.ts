import { Injectable } from '@angular/core';
import {PostsPage} from "../states/posts-page";
import {StoreService} from "../../core/services/store.service";

@Injectable({
  providedIn: 'root'
})
export class PostsPageStore extends StoreService<PostsPage> {
  protected store: string = 'posts-page';

  constructor() {
    super({
      loading: true,
      posts: [],
      totalPosts: 0
    })
  }
}
