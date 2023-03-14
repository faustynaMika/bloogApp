import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PostsService} from "../../services/posts.service";


@Component({
  selector: 'app-posts-summary',
  templateUrl: './posts-summary.component.html',
  styleUrls: ['./posts-summary.component.css']
})
export class PostsSummaryComponent implements OnInit {

  total$: Observable < number > ;

  constructor(
    private employees: PostsService
  ) {}

  ngOnInit() {
    this.total$ = this.employees.totalPosts$;
  }

}
