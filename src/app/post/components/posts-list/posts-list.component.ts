import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../models/post";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})

export class PostsListComponent implements OnInit {
  loading$: Observable<boolean>;
  posts$: Observable<Post[]>;
  noResults$: Observable<boolean>;

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    this.loading$ = this.postsService.loading$
    this.posts$ = this.postsService.posts$;
  }

}
