import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {PostsPageComponent} from "./components/posts-page/posts-page.component";
import {PostsListComponent} from "./components/posts-list/posts-list.component";
import {PostsSummaryComponent} from "./components/posts-summary/posts-summary.component";
import {PostCardComponent} from './components/posts-list/components/post-card/post-card.component';
import {PostDetailsPageComponent} from "./components/post-details-page/post-details-page.component";

@NgModule({
  declarations: [
    PostsPageComponent,
    PostsListComponent,
    PostsSummaryComponent,
    PostCardComponent,
    PostDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,

  ]
})
export class PostsModule {
}
