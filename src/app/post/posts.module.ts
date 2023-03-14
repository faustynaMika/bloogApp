import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {PostsPageComponent} from "./components/posts-page/posts-page.component";
import {PostsListComponent} from "./components/posts-list/posts-list.component";
import {PostFormComponent} from "./components/post-form/post-form.component";
import {PostsSummaryComponent} from "./components/posts-summary/posts-summary.component";
import { PostCardComponent } from './components/posts-list/components/post-card/post-card.component';

@NgModule({
  declarations: [
    PostsPageComponent,
    PostsListComponent,
    PostFormComponent,
    PostsSummaryComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,

  ]
})
export class PostsModule { }
