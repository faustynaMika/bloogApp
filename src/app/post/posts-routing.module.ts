import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsPageComponent} from "./components/posts-page/posts-page.component";
import {PostDetailsPageComponent} from "./components/post-details-page/post-details-page.component";

const routes: Routes = [
  { path: '', component: PostsPageComponent },
  { path: 'details/:id', component: PostDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
