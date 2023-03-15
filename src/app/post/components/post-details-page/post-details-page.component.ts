import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from "../../models/post";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.css']
})
export class PostDetailsPageComponent {
  post$: Observable<Post | any>;

  constructor(private _Activatedroute: ActivatedRoute, private postService: PostsService) {
    let id = this._Activatedroute.snapshot.paramMap.get("id")

    if (id) {
      this.post$ = postService.post$(id)
    }
  }


}

