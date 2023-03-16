import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from "../../models/post";
import {PostsService} from "../../services/posts.service";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.css']
})
export class PostDetailsPageComponent implements OnInit {
  post$: Observable<Post | any>;
  loggedIn$: Observable<boolean>

  constructor(private _Activatedroute: ActivatedRoute, private postService: PostsService, private authService: AuthService) {
    let id = this._Activatedroute.snapshot.paramMap.get("id")

    if (id) {
      this.post$ = postService.post$(id)
    }
  }

  ngOnInit(): void {
    this.loggedIn$ = this.authService.isLoggedIn
  }

}

